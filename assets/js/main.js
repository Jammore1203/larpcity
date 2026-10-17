// Shared site code: header, footer, Markdown renderer and per-page renderers.
// You normally don't need to edit this file — content lives in config.js and data/.
(function () {
  const S = window.SITE || {};
  const page = document.body.dataset.page;

  // ---------- helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const articles = window.WIKI_ARTICLES || [];
  const categories = window.WIKI_CATEGORIES || [];
  const articleById = Object.fromEntries(articles.map((a) => [a.id, a]));
  const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

  function safeUrl(url) {
    const u = url.trim();
    return /^(https?:\/\/|mailto:|#|[\w./-]+(\.html)?(#[\w-]*)?$)/i.test(u) ? u : "#";
  }

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  // ---------- tiny Markdown renderer ----------
  function inline(text) {
    let s = esc(text);
    const codes = [];
    s = s.replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(c) - 1}\u0000`);
    s = s.replace(/\[\[([\w-]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => {
      const a = articleById[id];
      const text = label || (a ? a.title : id);
      return `<a class="wiki-link${a ? "" : " missing"}" href="wiki.html#${id}"${a ? "" : ' title="This page does not exist yet"'}>${text}</a>`;
    });
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, url) => {
      const href = safeUrl(url.replace(/&amp;/g, "&"));
      const ext = /^https?:/i.test(href) ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${esc(href)}"${ext}>${label}</a>`;
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
    s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`);
    return s;
  }

  function slug(text) {
    return text.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "");
  }

  function markdown(src) {
    const lines = src.replace(/\r/g, "").split("\n");
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }

      const h = line.match(/^(#{1,4})\s+(.*)$/);
      if (h) {
        const level = Math.min(h[1].length + 1, 5); // # -> h2 (h1 is the page title)
        out.push(`<h${level} id="${slug(h[2])}">${inline(h[2])}</h${level}>`);
        i++; continue;
      }

      if (line.trim().startsWith("|")) {
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++].trim());
        const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
        const body = rows.filter((r) => !/^\|[\s:|-]+\|$/.test(r));
        const [head, ...rest] = body;
        out.push(
          `<div class="table-wrap"><table><thead><tr>${cells(head).map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>` +
            rest.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("") +
            `</tbody></table></div>`
        );
        continue;
      }

      if (line.startsWith(">")) {
        const quote = [];
        while (i < lines.length && lines[i].startsWith(">")) quote.push(lines[i++].replace(/^>\s?/, ""));
        const callout = quote[0].match(/^\[!(TIP|NOTE|WARNING|INFO)\]\s*$/i);
        if (callout) {
          const kind = callout[1].toLowerCase();
          out.push(`<div class="callout callout-${kind}"><strong class="callout-title">${kind}</strong>${markdown(quote.slice(1).join("\n"))}</div>`);
        } else {
          out.push(`<blockquote>${markdown(quote.join("\n"))}</blockquote>`);
        }
        continue;
      }

      const listMatch = line.match(/^\s*([-*]|\d+\.)\s+/);
      if (listMatch) {
        const ordered = /\d/.test(listMatch[1]);
        const items = [];
        while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*([-*]|\d+\.)\s+/, ""));
        const tag = ordered ? "ol" : "ul";
        out.push(`<${tag}>${items.map((it) => `<li>${inline(it)}</li>`).join("")}</${tag}>`);
        continue;
      }

      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|\||>|\s*([-*]|\d+\.)\s)/.test(lines[i])) para.push(lines[i++]);
      out.push(`<p>${inline(para.join(" "))}</p>`);
    }
    return out.join("\n");
  }
  window.renderMarkdown = markdown;

  // ---------- header & footer ----------
  const NAV = [
    ["index", "index.html", "Home"],
    ["wiki", "wiki.html", "Wiki"],
    ["updates", "updates.html", "Updates"],
    ["codes", "codes.html", "Codes"],
    ["rules", "rules.html", "Rules"],
  ];

  function renderChrome() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav-row">
        <a class="brand" href="index.html"><span class="brand-mark">LC</span><span>${esc(S.name || "Larp City")}</span></a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
        <nav class="nav-links">
          ${NAV.map(([id, href, label]) => `<a href="${href}"${id === page ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("")}
          <a class="btn btn-play btn-sm" href="${esc(S.robloxUrl || "#")}" target="_blank" rel="noopener">▶ Play</a>
        </nav>
      </div>`;
    document.body.prepend(header);
    const toggle = $(".nav-toggle", header);
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });

    const socials = [
      ["Discord", S.discordUrl],
      ["Roblox Group", S.robloxGroupUrl],
      ["YouTube", S.youtubeUrl],
      ["TikTok", S.tiktokUrl],
    ].filter(([, url]) => url);
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container footer-row">
        <div>
          <a class="brand" href="index.html"><span class="brand-mark">LC</span><span>${esc(S.name || "Larp City")}</span></a>
          <p class="muted small">A fan-made community site. Not affiliated with Roblox Corporation.</p>
        </div>
        <div class="footer-links">
          ${NAV.map(([, href, label]) => `<a href="${href}">${label}</a>`).join("")}
          ${socials.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`).join("")}
        </div>
      </div>
      <div class="container small muted copyright">© ${new Date().getFullYear()} ${esc(S.name || "Larp City")}</div>`;
    document.body.append(footer);
  }

  // ---------- home page ----------
  function renderHome() {
    $("#tagline").textContent = S.tagline || "";
    document.querySelectorAll("[data-play]").forEach((a) => (a.href = S.robloxUrl || "#"));
    const discord = $("#discord-btn");
    if (S.discordUrl) discord.href = S.discordUrl;
    else discord.remove();

    $("#stats").innerHTML = (S.stats || [])
      .map((s) => `<div class="stat"><div class="stat-value">${esc(s.value)}</div><div class="stat-label">${esc(s.label)}</div></div>`)
      .join("");

    $("#home-categories").innerHTML = categories.map(categoryCard).join("");

    $("#home-updates").innerHTML = (window.UPDATES || []).slice(0, 2).map(updateCard).join("");
  }

  function categoryCard(c) {
    const list = articles.filter((a) => a.category === c.id);
    const first = list[0];
    return `<a class="card cat-card" href="wiki.html#${first ? first.id : ""}">
      <div class="cat-icon">${c.icon || "📄"}</div>
      <h3>${esc(c.name)}</h3>
      <p class="muted small">${list.length} article${list.length === 1 ? "" : "s"}</p>
    </a>`;
  }

  function updateCard(u) {
    return `<article class="card update" id="${esc(u.version)}">
      <div class="update-meta">
        <span class="tag tag-${esc(u.tag || "minor")}">${esc(u.tag || "update")}</span>
        <span class="muted small">${esc(u.version)} · ${formatDate(u.date)}</span>
      </div>
      <h3>${esc(u.title)}</h3>
      <div class="prose">${markdown(u.notes || "")}</div>
    </article>`;
  }

  // ---------- updates page ----------
  function renderUpdates() {
    $("#updates-list").innerHTML = (window.UPDATES || []).map(updateCard).join("") || `<p class="muted">No updates yet.</p>`;
  }

  // ---------- codes page ----------
  function renderCodes() {
    const codes = window.CODES || [];
    const row = (c) => `<div class="code-row${c.active ? "" : " expired"}">
        <code class="code">${esc(c.code)}</code>
        <span class="code-reward">${esc(c.reward)}</span>
        ${c.active ? `<button class="btn btn-ghost btn-sm copy" data-code="${esc(c.code)}">Copy</button>` : `<span class="tag tag-expired">Expired</span>`}
      </div>`;
    const active = codes.filter((c) => c.active);
    const expired = codes.filter((c) => !c.active);
    $("#codes-active").innerHTML = active.map(row).join("") || `<p class="muted">No active codes right now. Check back after the next update!</p>`;
    $("#codes-expired").innerHTML = expired.map(row).join("") || `<p class="muted">None.</p>`;
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".copy");
      if (!btn) return;
      navigator.clipboard?.writeText(btn.dataset.code).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      });
    });
  }

  // ---------- wiki ----------
  function renderWiki() {
    const nav = $("#wiki-nav");
    const main = $("#wiki-main");
    const search = $("#wiki-search");

    nav.innerHTML = categories
      .map((c) => {
        const list = articles.filter((a) => a.category === c.id);
        return `<div class="wiki-nav-group">
          <div class="wiki-nav-title">${c.icon || ""} ${esc(c.name)}</div>
          ${list.map((a) => `<a href="#${a.id}" data-id="${a.id}">${esc(a.title)}</a>`).join("")}
        </div>`;
      })
      .join("");

    function showHome() {
      document.title = `Wiki · ${S.name}`;
      main.innerHTML = `
        <h1>${esc(S.name)} Wiki</h1>
        <p class="lead muted">Everything you need to know about the city: ${articles.length} articles and counting.</p>
        <div class="grid grid-3">${categories.map(categoryCard).join("")}</div>
        <h2>All articles</h2>
        <div class="article-list">${articles.map(articleItem).join("")}</div>`;
    }

    function articleItem(a) {
      const c = categoryById[a.category];
      return `<a class="article-item" href="#${a.id}">
        <span class="article-item-title">${esc(a.title)}</span>
        <span class="muted small">${c ? esc(c.name) + " · " : ""}${esc(a.summary || "")}</span>
      </a>`;
    }

    function showArticle(a) {
      const c = categoryById[a.category];
      document.title = `${a.title} · ${S.name} Wiki`;
      const related = articles.filter((x) => x.category === a.category && x.id !== a.id);
      main.innerHTML = `
        <nav class="crumbs small"><a href="#">Wiki</a> / ${c ? `<span>${esc(c.name)}</span> / ` : ""}<span>${esc(a.title)}</span></nav>
        <h1>${esc(a.title)}</h1>
        ${a.summary ? `<p class="lead muted">${esc(a.summary)}</p>` : ""}
        <div class="prose">${markdown(a.body || "")}</div>
        ${related.length ? `<h2 class="related-title">More in ${esc(c ? c.name : "this category")}</h2><div class="article-list">${related.map(articleItem).join("")}</div>` : ""}`;
    }

    function showMissing(id) {
      document.title = `Not found · ${S.name} Wiki`;
      main.innerHTML = `<h1>Page not found</h1><p class="muted">There is no wiki page called <code>${esc(id)}</code> yet.</p><p><a href="#">Back to the wiki home</a></p>`;
    }

    function showSearch(q) {
      const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      const scored = articles
        .map((a) => {
          const title = a.title.toLowerCase();
          const hay = `${title} ${a.summary || ""} ${a.body || ""}`.toLowerCase();
          if (!terms.every((t) => hay.includes(t))) return null;
          return { a, score: terms.reduce((n, t) => n + (title.includes(t) ? 10 : 0) + hay.split(t).length, 0) };
        })
        .filter(Boolean)
        .sort((x, y) => y.score - x.score);
      main.innerHTML = `<h1>Search results</h1>
        <p class="muted">${scored.length} result${scored.length === 1 ? "" : "s"} for “${esc(q)}”</p>
        <div class="article-list">${scored.map((s) => articleItem(s.a)).join("")}</div>`;
    }

    function route() {
      const id = decodeURIComponent(location.hash.slice(1));
      nav.querySelectorAll("a").forEach((l) => l.classList.toggle("active", l.dataset.id === id));
      if (!id) showHome();
      else if (articleById[id]) showArticle(articleById[id]);
      else showMissing(id);
      document.body.classList.remove("wiki-nav-open");
      window.scrollTo(0, 0);
    }

    search.addEventListener("input", () => {
      const q = search.value.trim();
      if (q) showSearch(q);
      else route();
    });
    $("#wiki-nav-toggle").addEventListener("click", () => document.body.classList.toggle("wiki-nav-open"));
    window.addEventListener("hashchange", () => {
      search.value = "";
      route();
    });
    route();
  }

  renderChrome();
  ({ index: renderHome, wiki: renderWiki, updates: renderUpdates, codes: renderCodes })[page]?.();
})();

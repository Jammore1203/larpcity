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
    return isNaN(d) ? iso : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
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
        // split on "|", but not the one inside a [[page|label]] link
        const cells = (r) => r.replace(/^\||\|$/g, "").split(/\|(?![^[]*\]\])/).map((c) => c.trim());
        const body = rows.filter((r) => !/^\|[\s:|-]+\|$/.test(r));
        const [head, ...rest] = body;
        out.push(
          `<div class="table-wrap"><table><thead><tr>${cells(head).map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>` +
            rest.map((r) => `<tr>${cells(r).map((c) => `<td${/^(\$[\d,]|\d[\d,.]*( mph|s|m|%)?$|Free$)/.test(c) ? ' class="num"' : ""}>${inline(c)}</td>`).join("")}</tr>`).join("") +
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
    ["index", "index.html", "Front Page"],
    ["wiki", "wiki.html", "Wiki"],
    ["updates", "updates.html", "Patch Notes"],
    ["store", "store.html", "Store"],
    ["rules", "rules.html", "Rules"],
  ];
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const name = esc(S.name || "Larp City");
  const wordmark = (cls = "") =>
    `<a class="wordmark display ${cls}" href="index.html">${name.replace(/(\S+)$/, "<span>$1</span>")}</a>`;

  function renderChrome() {
    const home = page === "index";
    const header = document.createElement("header");
    header.className = "site-header" + (home ? " home" : "");
    header.innerHTML = `
      <div class="topbar"><div class="container">
        <span>Mayflex<span class="hide-sm dim"> · ${esc(today)}</span></span>
        <a href="${esc(S.robloxUrl || "#")}" target="_blank" rel="noopener">Play free on Roblox →</a>
      </div></div>
      ${home ? `<div class="container masthead">
        <div class="masthead-name display">${name}</div>
        <div class="masthead-line"><span class="hide-sm">Mayflex edition</span><em>${esc(S.motto || "")}</em><span class="hide-sm">Price: free</span></div>
      </div>` : ""}
      <div class="bar"><div class="container">
        ${home ? "" : wordmark()}
        <nav class="sections">${NAV.map(([id, href, label]) => `<a href="${href}"${id === page ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
      </div></div>`;
    document.body.prepend(header);

    const socials = [
      ["Discord", S.discordUrl],
      ["Roblox group", S.robloxGroupUrl],
      ["YouTube", S.youtubeUrl],
      ["TikTok", S.tiktokUrl],
    ].filter(([, url]) => url);
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container footer-row">
        <div>
          ${wordmark()}
          <p>A fan-run paper for Mayflex. Not affiliated with Roblox Corporation. Every brand in the game is a parody, and so is most of the financial advice.</p>
        </div>
        <nav class="footer-links">
          ${NAV.map(([, href, label]) => `<a href="${href}">${label}</a>`).join("")}
          ${socials.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`).join("")}
        </nav>
      </div>`;
    document.body.append(footer);
  }

  // ---------- front page ----------
  function renderHome() {
    document.querySelectorAll("[data-play]").forEach((a) => (a.href = S.robloxUrl || "#"));
    const discord = $("#discord-btn");
    if (S.discordUrl) discord.href = S.discordUrl;
    else discord.remove();

    if (S.heroImage) {
      $("#lead-figure").innerHTML = `<img src="${esc(S.heroImage)}" alt=""><figcaption>${esc(S.heroCaption || "")}</figcaption>`;
    } else {
      $("#lead-figure").remove();
    }

    $("#grind").innerHTML = (S.careers || [])
      .map((c) => `<li style="--c:${esc(c.color)}"><a href="wiki.html#${esc(c.wiki)}">
        <span class="name">${esc(c.name)}</span>
        <span class="tag">“${esc(c.tagline)}”</span>
        <span class="text">${esc(c.text)}</span>
      </a></li>`)
      .join("");

    $("#contents").innerHTML = categories
      .map((c) => {
        const list = articles.filter((a) => a.category === c.id);
        return `<li><a href="wiki.html#${list[0] ? list[0].id : ""}">${esc(c.name)}</a><span class="fill"></span><span class="n">${list.length} page${list.length === 1 ? "" : "s"}</span></li>`;
      })
      .join("");

    $("#briefs").innerHTML = (window.UPDATES || [])
      .slice(0, 3)
      .map((u) => `<div class="brief">
        <span class="kicker">${formatDate(u.date)}</span>
        <h3>${esc(u.title)}</h3>
        ${markdown(u.notes || "")}
      </div>`)
      .join("");
  }

  // ---------- patch notes ----------
  function renderUpdates() {
    $("#updates-list").innerHTML =
      (window.UPDATES || [])
        .map((u) => `<article class="update">
          <div class="update-date">${formatDate(u.date)}${u.version ? ` · ${esc(u.version)}` : ""}<span class="kicker">${esc(u.tag || "")}</span></div>
          <div><h2>${esc(u.title)}</h2><div class="prose">${markdown(u.notes || "")}</div></div>
        </article>`)
        .join("") || `<p class="muted">Nothing yet.</p>`;
  }

  // ---------- single-article pages (store.html shows the "store" wiki article) ----------
  function renderArticlePage() {
    const a = articleById[document.body.dataset.article];
    if (!a) return;
    $("#page-title").textContent = a.title;
    $("#page-summary").textContent = a.summary || "";
    $("#page-body").innerHTML = markdown(a.body || "");
  }

  // ---------- wiki ----------
  function renderWiki() {
    const nav = $("#wiki-nav");
    const main = $("#wiki-main");
    const search = $("#wiki-search");

    nav.innerHTML = categories
      .map((c) => `<div class="wiki-nav-group">
          <div class="wiki-nav-title kicker">${esc(c.name)}</div>
          ${articles.filter((a) => a.category === c.id).map((a) => `<a href="#${a.id}" data-id="${a.id}">${esc(a.title)}</a>`).join("")}
        </div>`)
      .join("");

    function showHome() {
      document.title = `Wiki · ${S.name}`;
      main.innerHTML = `
        <span class="kicker">The ${name} wiki</span>
        <h1>Everything in Mayflex</h1>
        <p class="lead-summary">${articles.length} pages on every career, upgrade, gig, car, flat and chain in the game, taken straight from the game's own numbers.</p>
        <div class="index-grid">${categories
          .map((c) => `<section class="index-group"><h2>${esc(c.name)}</h2><ul>${articles
            .filter((a) => a.category === c.id)
            .map((a) => `<li><a href="#${a.id}">${esc(a.title)}</a><span>${esc(a.summary || "")}</span></li>`)
            .join("")}</ul></section>`)
          .join("")}</div>`;
    }

    function showArticle(a) {
      const c = categoryById[a.category];
      document.title = `${a.title} · ${S.name} Wiki`;
      main.innerHTML = `
        <nav class="crumbs kicker"><a href="#">Wiki</a> / ${c ? esc(c.name) : ""}</nav>
        <h1>${esc(a.title)}</h1>
        ${a.summary ? `<p class="lead-summary">${esc(a.summary)}</p>` : ""}
        <div class="prose">${markdown(a.body || "")}</div>`;
    }

    function showMissing(id) {
      document.title = `Not found · ${S.name} Wiki`;
      main.innerHTML = `<span class="kicker">Page not found</span><h1>Nothing here</h1><p class="lead-summary">There's no page called <code>${esc(id)}</code>. <a href="#">Back to the index</a>.</p>`;
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
      main.innerHTML = `<span class="kicker">Search</span><h1>“${esc(q)}”</h1>
        <p class="lead-summary">${scored.length} page${scored.length === 1 ? "" : "s"} found.</p>
        ${scored.map((s) => `<div class="result"><a href="#${s.a.id}">${esc(s.a.title)}</a><p>${esc(s.a.summary || "")}</p></div>`).join("")}`;
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
  ({ index: renderHome, wiki: renderWiki, updates: renderUpdates, store: renderArticlePage })[page]?.();
})();

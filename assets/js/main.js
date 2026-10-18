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
    ["index", "index.html", "Home"],
    ["wiki", "wiki.html", "Wiki"],
    ["map", "map.html", "Map"],
    ["updates", "updates.html", "Updates"],
    ["store", "store.html", "Store"],
    ["rules", "rules.html", "Rules"],
  ];
  const name = esc(S.name || "Larp City");
  const logo = `<a class="logo" href="index.html">${name.replace(/(\S+)$/, "<b>$1</b>")}</a>`;

  function renderChrome() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `<div class="container nav-row">
        ${logo}
        <nav class="nav">${NAV.map(([id, href, label]) => `<a href="${href}"${id === page ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
        <a class="btn btn-play" href="${esc(S.robloxUrl || "#")}" target="_blank" rel="noopener">Play</a>
      </div>`;
    document.body.prepend(header);

    const socials = [
      ["Discord", S.discordUrl],
      ["Roblox group", S.robloxGroupUrl],
      ["YouTube", S.youtubeUrl],
      ["TikTok", S.tiktokUrl],
    ].filter(([, url]) => url);
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `<div class="container footer-row">
        <span>${name} is a game on Roblox. This site isn't affiliated with Roblox Corporation.</span>
        <nav class="footer-links">${socials.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`).join("")}</nav>
      </div>`;
    document.body.append(footer);
  }

  // ---------- home ----------
  function renderHome() {
    $("#intro").textContent = S.intro || "";
    document.querySelectorAll("[data-play]").forEach((a) => (a.href = S.robloxUrl || "#"));
    const discord = $("#discord-btn");
    if (S.discordUrl) discord.href = S.discordUrl;
    else discord.remove();

    $("#careers").innerHTML = (S.careers || [])
      .map((c) => `<a class="career" href="wiki.html#${esc(c.wiki)}" style="--c:${esc(c.color)}">
        <h3>${esc(c.name)}</h3>
        <div class="tag">${esc(c.tagline)}</div>
        <ul>${(c.branches || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </a>`)
      .join("");

    const u = (window.UPDATES || [])[0];
    if (u) {
      $("#latest").innerHTML = `<div class="update-row">
        <span class="label">${formatDate(u.date)}</span>
        <h3>${esc(u.title)}</h3>
        ${markdown(u.notes || "")}
      </div>`;
    }
  }

  // ---------- updates ----------
  function renderUpdates() {
    $("#updates-list").innerHTML =
      (window.UPDATES || [])
        .map((x) => `<article class="update">
          <span class="label">${formatDate(x.date)}</span>${x.tag === "major" ? '<span class="tag-pill major">Major</span>' : ""}
          <h2>${esc(x.title)}</h2>
          <div class="prose">${markdown(x.notes || "")}</div>
        </article>`)
        .join("") || `<p class="muted">Nothing yet.</p>`;
  }

  // ---------- map ----------
  function renderMap() {
    const D = window.MAP_DATA || { districts: [], places: [], streets: [] };
    const view = $("#map-view");
    const world = $("#map-world");
    const card = $("#place-card");
    const money = (n) => "$" + Number(n).toLocaleString("en-US");
    const TYPE = { apartment: "Apartment", penthouse: "Penthouse", house: "House", mansion: "Mansion", hangar: "Hangar", shop: "Shop" };

    const html = [];
    D.districts.forEach((d) => html.push(`<div class="mk mk-district" style="left:${d.u * 100}%;top:${d.v * 100}%">${esc(d.name.toUpperCase())}</div>`));
    D.streets.forEach((s) => html.push(`<div class="mk mk-street${s.major ? " major" : ""}" style="left:${s.u * 100}%;top:${s.v * 100}%;--a:${s.angle}deg">${esc(s.name)}</div>`));
    D.places.forEach((p, i) => {
      const cls = p.kind === "property" ? "property" : "landmark";
      html.push(`<button class="mk mk-pin ${cls}" data-i="${i}" style="left:${p.u * 100}%;top:${p.v * 100}%" aria-label="${esc(p.name)}"></button>`);
      html.push(`<div class="mk mk-name ${cls}" style="left:${p.u * 100}%;top:${p.v * 100}%">${esc(p.name)}</div>`);
    });
    world.insertAdjacentHTML("beforeend", html.join(""));

    // pan / zoom
    const BASE = 3000;
    let z = 1, x = 0, y = 0;
    const minZ = () => Math.max(view.clientWidth, view.clientHeight) / BASE;
    function apply() {
      const mz = minZ();
      z = Math.min(Math.max(z, mz), 2.5);
      const w = BASE * z;
      x = Math.min(0, Math.max(view.clientWidth - w, x));
      y = Math.min(0, Math.max(view.clientHeight - w, y));
      world.style.width = world.style.height = BASE + "px";
      world.style.transform = `translate(${x}px, ${y}px) scale(${z})`;
      world.style.setProperty("--inv", 1 / z);
      view.classList.toggle("zoom-2", z >= 0.7);
      view.classList.toggle("zoom-3", z >= 1.25);
    }
    function zoomAt(f, cx, cy) {
      const nz = Math.min(Math.max(z * f, minZ()), 2.5);
      x = cx - ((cx - x) * nz) / z;
      y = cy - ((cy - y) * nz) / z;
      z = nz;
      apply();
    }
    function reset() {
      z = minZ() * 1.0;
      // start on the city in the south of the island
      x = view.clientWidth / 2 - 0.58 * BASE * z;
      y = view.clientHeight / 2 - 0.62 * BASE * z;
      apply();
    }

    const pts = new Map();
    let last = null, moved = 0;
    view.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".map-ui, .zoom-btns, .place-card")) return;
      view.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      moved = 0;
      view.classList.add("dragging");
    });
    view.addEventListener("pointermove", (e) => {
      if (!pts.has(e.pointerId)) return;
      const prev = pts.get(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        x += e.clientX - prev.x;
        y += e.clientY - prev.y;
        moved += Math.abs(e.clientX - prev.x) + Math.abs(e.clientY - prev.y);
        apply();
      } else if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const r = view.getBoundingClientRect();
        if (last) zoomAt(dist / last, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
        last = dist;
        moved = 99;
      }
    });
    const up = (e) => {
      if (pts.size === 1 && moved <= 6) {
        const pin = document.elementFromPoint(e.clientX, e.clientY)?.closest(".mk-pin");
        if (pin) openPin(pin);
      }
      pts.delete(e.pointerId);
      if (pts.size < 2) last = null;
      if (!pts.size) view.classList.remove("dragging");
    };
    view.addEventListener("pointerup", up);
    view.addEventListener("pointercancel", up);
    view.addEventListener("wheel", (e) => {
      e.preventDefault();
      const r = view.getBoundingClientRect();
      zoomAt(Math.exp(-e.deltaY * 0.0015), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    $("#zoom-in").onclick = () => zoomAt(1.4, view.clientWidth / 2, view.clientHeight / 2);
    $("#zoom-out").onclick = () => zoomAt(1 / 1.4, view.clientWidth / 2, view.clientHeight / 2);
    $("#zoom-reset").onclick = reset;
    window.addEventListener("resize", apply);

    // place details
    function openPin(pin) {
      const p = D.places[pin.dataset.i];
      world.querySelectorAll(".mk-pin.on").forEach((el) => el.classList.remove("on"));
      pin.classList.add("on");
      card.innerHTML = `<button class="x" aria-label="Close">×</button>
        <span class="label">${p.kind === "property" ? esc(TYPE[p.type] || "Property") + " · " + esc(p.area) : "Landmark"}</span>
        <h2>${esc(p.name)}</h2>
        ${p.price ? `<div class="price">${money(p.price)}</div>` : ""}
        ${p.text ? `<p>${esc(p.text)}</p>` : ""}
        ${p.kind === "property" ? `<p><a href="wiki.html#properties">All properties →</a></p>` : ""}`;
      card.classList.add("open");
      card.querySelector(".x").onclick = () => { card.classList.remove("open"); pin.classList.remove("on"); };
    }
    // keyboard users: pins are buttons
    world.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.closest(".mk-pin")) { e.preventDefault(); openPin(e.target.closest(".mk-pin")); }
    });

    // layer toggles
    const toggle = (id, cls, on) => $(id).addEventListener("change", (e) => view.classList.toggle(cls, on ? e.target.checked : !e.target.checked));
    toggle("#t-props", "hide-props", false);
    toggle("#t-land", "hide-land", false);
    toggle("#t-streets", "show-streets", true);

    const img = $("#map-img");
    if (img.complete) reset();
    else img.addEventListener("load", reset);
    reset();
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
          <div class="wiki-nav-title label">${esc(c.name)}</div>
          ${articles.filter((a) => a.category === c.id).map((a) => `<a href="#${a.id}" data-id="${a.id}">${esc(a.title)}</a>`).join("")}
        </div>`)
      .join("");

    function showHome() {
      document.title = `Wiki · ${S.name}`;
      main.innerHTML = `
        <h1>${name} Wiki</h1>
        <p class="lead-summary">${articles.length} pages. Numbers come from the game's own config, so they match what you see in game.</p>
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
        <nav class="crumbs label"><a href="#">Wiki</a> / ${c ? esc(c.name) : ""}</nav>
        <h1>${esc(a.title)}</h1>
        ${a.summary ? `<p class="lead-summary">${esc(a.summary)}</p>` : ""}
        <div class="prose">${markdown(a.body || "")}</div>`;
    }

    function showMissing(id) {
      document.title = `Not found · ${S.name} Wiki`;
      main.innerHTML = `<h1>Page not found</h1><p class="lead-summary">There's no page called <code>${esc(id)}</code>. <a href="#">Back to the index</a>.</p>`;
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
      main.innerHTML = `<h1>Search: ${esc(q)}</h1>
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
  ({ index: renderHome, wiki: renderWiki, updates: renderUpdates, store: renderArticlePage, map: renderMap })[page]?.();
})();

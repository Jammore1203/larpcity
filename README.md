# Larp City Website

The official website for **Larp City**, a Roblox tycoon set in Mayflex. It includes a home page, a searchable wiki, patch notes, a store page, and rules and FAQ.

It's a plain static site (HTML, CSS and JavaScript) with **no build step**. Edit a file, refresh, done.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Wiki (search, categories, articles) | `wiki.html` |
| Interactive map of Mayflex | `map.html` |
| Updates / patch notes | `updates.html` |
| Store (shows the `store` wiki article) | `store.html` |
| Rules & FAQ | `rules.html` |

## Editing content

All the content you'll usually change lives in these files:

- **`assets/js/config.js`**: game name, tagline, your Roblox game link, Discord, socials and the careers on the home page.
- **`assets/js/data/wiki.js`**: wiki categories and articles. To add an article, copy an existing block and change the `id`, `title`, `category`, `summary` and `body`. Bodies use simple Markdown:
  - `## Heading`, `**bold**`, `*italic*`, `- lists`, `1. lists`, `| tables |`
  - `[[article-id]]` or `[[article-id|custom text]]` links to another wiki page (works inside tables too).
  - `> [!TIP]`, `> [!NOTE]` or `> [!WARNING]` on its own line starts a callout box
- **`assets/js/data/updates.js`**: patch notes, newest first.
- **`assets/js/data/map.js`** and **`assets/img/mayflex-*.webp`**: the map. Both were generated from the game's terrain, road, `MapSystem` and `PropertyCatalog` data, so they match the island in game.

The rules and FAQ are written directly in `rules.html`. Colours are at the top of `assets/css/style.css` and match the in-game phone UI.

> The wiki was generated from the game's scripts (careers, upgrade trees, gigs, vehicles, properties, store, reputation...) as of the Oct 17, 2026 build. When you change numbers in the game, update the matching article.

## Previewing locally

Open `index.html` in a browser, or run a local server:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing for free with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select your branch and the `/ (root)` folder.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.

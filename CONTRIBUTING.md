# Contributing

This guide is for anyone editing the site, especially our webmaster. If you know HTML and have used WordPress, you know most of what you need. The difference is that changes go through GitHub, and every change gets a preview link before it goes live.

## The short version

1. Make a **branch**.
2. Edit files.
3. Open a **pull request (PR)**.
4. Check the **preview link** on the PR, on desktop and on your phone.
5. **Merge.** The live site updates in a minute or two.

Nothing on a branch can affect the live site.

## Two ways to edit

**In the browser (no setup).** Good for text, hours, prices and events. Open the file on GitHub, click the pencil, make the change, then choose **Create a new branch and start a pull request**.

**On your computer.** Better for design work and new pages.

```sh
git clone git@github.com:wendwood/web-www.git
cd web-www
npm ci --ignore-scripts
npm run dev                 # open http://localhost:4321
git switch -c content/2027-prices
# edit, save, the browser reloads
git commit -am "Update 2027 prices"
git push -u origin content/2027-prices   # then open the PR link GitHub prints
```

VS Code with the official **Astro** extension highlights mistakes as you type.

## Where things live

| I want to change… | Edit |
|---|---|
| Hours, prices, party times, contact email, the banner at the top | `src/data/pool.ts` |
| Pool rules or privacy text | `src/content/pages/*.md` |
| Add an event or fundraiser | Copy a file in `src/content/events/`; it gets a page at `/events/<file-name>/` |
| Page layout (home, membership, parties…) | `src/pages/*.astro` |
| Menu, footer | `src/components/Nav.astro`, `Footer.astro` |
| Photos | `src/assets/photos/` (Astro resizes them) |
| Colors, fonts, spacing | The tokens at the top of `src/styles/global.css` (every page follows them) |
| PDFs | `public/files/YYYY/MM/`, linked as `/files/YYYY/MM/name.pdf`; list kept ones in `docs/inventory.md` |
| Old-URL redirects | `public/_redirects` and `docs/url-map.csv` |

An `.astro` file is HTML with an optional block between `---` lines at the top where data is loaded. `{pool.email}` drops in a value. We don't use React; if something needs interactivity, ask first.

If you leave out a required field in a Markdown file or mistype a date, `npm run dev` and the PR check tell you which file is wrong.

## Rules for this repo

This repository is **public**. Anyone can read every file and every commit.

- **Never commit** passwords or keys, member or order data, WordPress backups, or spreadsheets of people. CI blocks the common file types, but don't rely on it.
- **Contacts are role addresses only** (the pool's email and phone). Don't publish a volunteer's personal email or cell number.
- **Photos:** use ones the pool already publishes or the board approves. Phone photos contain GPS location, so ask the maintainer to strip metadata before adding one. File names never include a person's name.
- **Hours and prices go in `pool.ts` only**, so pages can't disagree.
- **Keep PRs to one topic** and say what changed and why.
- Changes to `public/_headers`, `public/_redirects`, `.github/` or `package.json` need the maintainer's review. Content and design PRs can be merged by the webmaster once the preview looks right and the checks are green.
- Resize photos to about 2000px wide; keep PDFs under 10 MB.

## Help

Open an issue describing what you want changed, or ask the maintainer.

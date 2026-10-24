# web-www

The website for the **Wendwood Pool**, a volunteer-run neighborhood pool in Newport News, VA. It replaces the old WordPress site at `wendwoodpool.com`.

It's a static site built with [Astro](https://astro.build) and hosted on Cloudflare Pages. There are no plugins, no PHP, and no database to patch. Membership sign-up stays with Access Granted Systems. Party bookings and forms will be separate systems that the site links to ([why](docs/decisions/0003-no-server-code-in-the-website.md)).

## Run it

You need Node.js 24 or later.

```sh
npm ci --ignore-scripts
npm run dev        # http://localhost:4321, reloads as you edit
npm test           # checks every old URL still works
npm run build      # builds the site into dist/
```

## Editing

See [CONTRIBUTING.md](CONTRIBUTING.md). In short: hours, prices and contacts live in `src/data/pool.ts`; each page is a file in `src/pages/`; rules, privacy and events are Markdown in `src/content/`.

## Deploying

- Every pull request gets a preview at `https://<branch>.wendwood-www.pages.dev`.
- Merging to `main` deploys to production.
- To roll back, pick the previous deployment in Cloudflare Pages and choose **Rollback**, or revert the PR.

## Docs

- [docs/inventory.md](docs/inventory.md): what was on the old site and what we kept
- [docs/url-map.csv](docs/url-map.csv): every old URL and where it goes now
- [docs/cutover.md](docs/cutover.md): moving the domain without breaking email
- [docs/decisions/](docs/decisions/): why it's built this way

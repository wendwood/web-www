# CLAUDE.md

The public website for the Wendwood Pool (Newport News, VA) at `wendwoodpool.com`, replacing an old WordPress site. Astro builds plain static HTML; Cloudflare Pages serves it. **Nothing is collected or stored: no forms, no logins, no server code.**

Standards: `~/Code/_standards/` (archetype: static site, tier: T0). Not versioned; roll back from the Pages deployment history.

## Layout
```
src/data/pool.ts      hours, prices, party details, contacts, site notice: the single source of facts
src/pages/            one .astro file per URL
src/content/pages/    Markdown for text-heavy pages (rules, privacy)
src/content/events/   one Markdown file per event; page at /events/<id>/ unless `page:` names its own
src/components/, src/layouts/, src/styles/global.css   look ported from the old Divi theme
src/assets/photos/    photos, resized by Astro at build
public/_redirects     old WordPress URLs -> new pages; public/_headers: CSP and security headers
public/files/         PDFs kept at their old upload paths (listed in docs/inventory.md)
docs/                 url-map.csv, inventory, cutover plan, decisions/
test/                 node --test checks (redirect coverage)
```

## Invariants (do not break)
1. **Static only.** No `functions/`, `migrations/` or `wrangler.*`; bookings, forms and memberships are separate systems (`docs/decisions/0003`). CI's `guard` job enforces it.
2. **No personal data in the repo.** No WordPress backups, order or member exports, or `.sql`/`.csv`/`.xlsx` dumps (only `docs/url-map.csv`). CI's `guard` job enforces it; backups live outside git.
3. **Role contacts only.** Emails and phones come from `pool.ts` and are pool/association addresses, never a volunteer's personal email or cell.
4. **Photos are ones the pool already publishes or the board approves.** Strip metadata before committing (`exiftool -all= -tagsfromfile @ -icc_profile -orientation`); phone photos carry GPS. File names never contain a person's name.
5. **Facts live once.** Hours, prices and party details are read from `pool.ts`; never hard-code them in a page.
6. **Old URLs keep working.** Every row in `docs/url-map.csv` is a built page or a 301 in `_redirects`; `npm test` checks this.
7. **CSP stays strict.** No inline scripts or styles (`inlineStylesheets: 'never'`); a new third party means a new `_headers` entry with a reason.

## Working on it
```sh
npm ci --ignore-scripts && npm test && npm run build   # keep green
npm run dev                                            # http://localhost:4321
docker compose --profile pages up                      # :8788, applies _redirects/_headers like Pages
```

## Workflow
- `main` is production and protected: branch + PR, one topic per PR, squash merge.
- Every PR deploys a preview to `<branch>.wendwood-www.pages.dev`; merging deploys production.
- Public repo: short why-comments, roles not names, nothing about anyone's schedule or family.
- Departures from `_standards`: Astro instead of Python/Jinja2 (`docs/decisions/0001`), PR previews instead of a `preview` branch (`docs/decisions/0002`).

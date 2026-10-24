# Old site inventory

Taken from public pages only (sitemap, public WordPress API, page HTML) on 2026-10-23.

## Platform

WordPress 6.9 with the Divi theme on PHP 7.4 (end of life since November 2022), WooCommerce for party bookings and fundraisers, on a shared host. Page content is Divi shortcodes, so it was rewritten rather than exported.

## What we kept

Of 54 WordPress pages, 8 are current: Home, Membership, Pool Rules, Parties, Calendar, Contact, Egg My Yard, and Privacy (rewritten). The rental agreement moves into the future booking system. Everything else redirects; see [url-map.csv](url-map.csv).

Dropped from the old site: the WooCommerce shop, the dead Google Universal Analytics tag, the Facebook chat widget, math captchas, and the broken `goo.gl` map link.

## Conflicts to settle with the board

- **2026 prices.** The pages say Household $375/$475 and Single/Senior $190/$240; the WooCommerce product said $350/$450 and $175/$225. The site uses the page prices.
- **Party evenings.** `/parties/` said Fri/Sat/Sun; the rules page and product said Fri/Sat. The site uses Fri/Sat.
- **Pool hours.** The membership and rules pages listed different 2026 hours. The site uses the rules page.
- **Contacts.** The old site listed volunteers' personal emails and cell numbers. The new site uses the pool's email until the board picks role addresses.

## Documents (PDFs)

38 PDFs, most from 2019–2024. Current ones to keep at their old paths under `public/files/`:

- `2025/04/Wendwood-Association-Application-2025.pdf`
- `2025/04/Wendwood-Association-Rules-2025.pdf`
- `2024/06/Wendwood-Association-2024-Pool-Rental-Contract.docx.pdf`
- `2019/11/Wendwood-By-Laws-2019-FINAL-changes.pdf`

The board decides whether older ones (bylaws, budgets) stay public.

## Open questions

1. Who holds WP Admin and hosting control-panel access? It's needed for the backup and order export.
2. Is the WooCommerce membership product still taking orders, and where does its money go?
3. Where do the old Divi form submissions go, and does anyone rely on them?
4. Does the old host send any email for the domain (SPF includes its IP)?
5. Is Brevo still in use?

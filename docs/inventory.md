# Old site inventory

Taken from public pages only (sitemap, public WordPress API, page HTML) on 2026-10-23.

## Platform

WordPress 6.9 with the Divi theme on PHP 7.4 (end of life since November 2022), WooCommerce for party bookings and fundraisers, on a shared host. Page content is Divi shortcodes, so it was rewritten rather than exported.

## What we kept

Of 54 WordPress pages, 8 are current: Home, Membership, Pool Rules, Parties, Calendar, Contact, Egg My Yard, and Privacy (rewritten). The rental agreement moves into the future booking system. Everything else redirects; see [url-map.csv](url-map.csv).

Dropped from the old site: the WooCommerce shop, the dead Google Universal Analytics tag, the Facebook chat widget, math captchas, and the broken `goo.gl` map link.

## Conflicts to settle with the board

- **2026 prices.** The pages say Household $375/$475 and Single/Senior $190/$240; the WooCommerce product said $350/$450 and $175/$225. The site uses the page prices.
- **Party evenings.** `/parties/` said Fri/Sat/Sun; the rules page and product said Fri/Sat. The site uses the parties page (Fri/Sat/Sun).
- **Pool hours.** The membership and rules pages listed different 2026 hours and season start dates. The site uses the membership page, which was edited most recently.
- **Contacts.** The old site listed volunteers' personal emails and cell numbers. The new site uses the pool's email until the board picks role addresses.


## Documents (PDFs)

38 PDFs, most from 2019–2024. Every PDF path listed here must either exist under `public/files/` or have its own redirect in `public/_redirects`; `npm test` checks this.

Only the bylaws are kept, at their old path under `public/files/`:

- `2019/11/Wendwood-By-Laws-2019-FINAL-changes.pdf`

Current documents redirect to the page that replaced them. They also list volunteers' personal contact details, so they aren't republished:

- `2025/04/Wendwood-Association-Application-2025.pdf` goes to `/membership/`.
- `2024/06/Wendwood-Association-2024-Pool-Rental-Contract.docx.pdf` goes to `/parties/`.
- `2025/04/Wendwood-Association-Rules-2025.pdf` goes to `/pool-rules/`.

Old rules go to `/pool-rules/`:

- `2019/03/Wendwood-Association-2019-Pool-Information.pdf`
- `2020/06/Wendwood-Association-2020-Pool-Membership-Rules-and-Information.pdf`
- `2021/03/Wendwood-Association-Rules-2021.pdf`
- `2022/02/Wendwood-Association-Rules-2022.pdf`
- `2023/03/Wendwood-Association-Rules-2023.docx.pdf`
- `2024/03/Wendwood-Association-Rules-2024.docx.pdf`

Old membership applications and information go to `/membership/`:

- `2019/03/Wendwood-Association-2019-Pool-Membership-Application.pdf` (linked from an old page, not in the uploads list)
- `2019/03/Wendwood-Association-Application-2019.pdf`
- `2020/06/Wendwood-Association-2020-Pool-Membership-Application.pdf`
- `2020/06/Wendwood-Association-2020-Pool-Membership-Information.pdf`
- `2020/06/Wendwood-Association-Application-2020.pdf`
- `2020/07/Wendwood-Association-Pool-Application-2020.pdf`
- `2021/03/Wendwood-Association-Application-2021.pdf`
- `2022/02/Wendwood-Association-Application-2022.pdf`
- `2023/03/Wendwood-Association-Application-2023.pdf`
- `2023/04/Wendwood-Association-Application-2023-1.pdf`
- `2024/03/Wendwood-Association-Application-2024.pdf`

Swim team forms, sponsorships and meet procedures go to the Wahoos site:

- `2019/04/2019-Wahoos-Swim-Team-Registration-Medical-Release-Form.pdf`
- `2020/05/2020-Wahoos-Swim-Team-Registration-Medical-Release-Form.pdf`
- `2020/07/Wendwood-Inter-Pool-Swim-Meet-Procedures.pdf`
- `2021/04/2021-Wahoos-Swim-Team-Registration-Medical-Release-Form.pdf`
- `2022/04/2022-Wendwood-Wahoos-Sponsorship.pdf`
- `2022/04/wendwood-2021-sponsors.pdf`
- `2023/04/2023-Wendwood-Wahoos-Sponsorship.docx.pdf`
- `2024/05/2024-Wendwood-Wahoos-Sponsorship.docx.pdf`

Old flyers, order forms and fundraisers go to `/events/`:

- `2019/05/free-weekend.pdf`
- `2019/05/vinnys-flyer.pdf`
- `2019/06/Images-By-April2019-orderform.pdf`
- `2019/06/Wacky-Wednesdays.pdf`
- `2021/07/Laps-for-Wendwood-Fundraiser.pdf`
- `2021/07/SPORTS-MEMORY-MATE-ORDER-FORM-10A-2020-PDF.pdf`
- `2022/04/summerlake-flyer.pdf`

Old rental contracts go to `/parties/`:

- `2022/02/Wendwood-Association-2022-Pool-Rental-Contract.pdf`
- `2023/07/Wendwood-Association-2023-Pool-Rental-Contract.docx.pdf`

The 2019–2020 proposed budget is left without a redirect until the board decides whether to republish it. Any other old upload URL redirects to `/files/...` and gets the 404 page.

## Open questions

1. Who holds WP Admin and hosting control-panel access? It's needed for the backup and order export.
2. Is the WooCommerce membership product still taking orders, and where does its money go?
3. Where do the old Divi form submissions go, and does anyone rely on them?
4. Does the old host send any email for the domain (SPF includes its IP)?
5. Is Brevo still in use?

# Cutover: moving wendwoodpool.com to Cloudflare Pages

The domain's DNS is already on Cloudflare. Only the **web** records change; mail and newsletter records stay exactly as they are.

## Don't touch

MX (Zoho), SPF/verification TXT records, all `_domainkey` records, `_dmarc`, and the `updates` CNAME (newsletter). Take a screenshot or zone export before starting.

## Records that change

| Record | Today | Plan |
|---|---|---|
| apex `wendwoodpool.com` | A to the old host, DNS-only | Replaced by the Pages custom domain (proxied) |
| `www` | CNAME to apex | Add as a Pages custom domain, or redirect to the apex |
| `mail`, `ftp`, `cpanel`, `webmail` | CNAME to apex | Before cutover, change to an A record for the old host's IP (DNS-only) so the old control panel stays reachable. Delete when the host is cancelled. |
| host-style `default._domainkey` | TXT | Leave until nothing sends mail from the old host, then delete with the SPF `ip4` entry |

## Steps

1. **Two days before:** freeze edits on the old site, take the full backup and order export (stored outside git), export the DNS zone, and drop the apex and `www` TTLs to 1 minute.
2. Re-point `mail`, `ftp`, `cpanel` and `webmail` as above.
3. Check the production build on its `pages.dev` URL: every page, `npm test`, and a sample of redirects with `curl -sI`.
4. In Cloudflare Pages → Custom domains, add `wendwoodpool.com`, then `www.wendwoodpool.com`.
5. Verify:
   - The site loads over HTTPS.
   - `curl -sI https://wendwoodpool.com/` shows no `x-powered-by: PHP`.
   - The redirects work.
   - `dig MX wendwoodpool.com` is unchanged.
   - Mail sends and receives through Zoho.
   - The newsletter site still loads.
6. Watch for a week: analytics, Cloudflare 404s, and email.

## Rollback

Keep the old host running, untouched, for 30 days. To roll back, remove the Pages custom domain and recreate the apex A record (DNS-only) and the `www` CNAME. With a 1-minute TTL this takes minutes.

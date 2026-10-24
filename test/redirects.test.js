// Every old URL people or search engines know must keep working after the move.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';

const rules = new Map(
  readFileSync('public/_redirects', 'utf8')
    .split('\n')
    .filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => {
      const [from, to, status] = line.trim().split(/\s+/);
      return [from, { to, status }];
    }),
);

const rows = readFileSync('docs/url-map.csv', 'utf8')
  .trim()
  .split('\n')
  .slice(1)
  // Titles never contain commas; old/action/new are columns 3, 6, 7.
  .map((line) => line.split(','))
  .map((cols) => ({ old: cols[2], action: cols[5], next: cols[6] }));

function pageFile(path) {
  const name = path === '/' ? 'index' : path.replace(/^\/|\/$/g, '');
  const nested = `src/pages/${name}/index.astro`;
  return existsSync(nested) ? nested : `src/pages/${name}.astro`;
}

test('every redirect is a permanent 301', () => {
  for (const [from, { status }] of rules) assert.equal(status, '301', from);
});

for (const row of rows) {
  if (row.next === '(none)' || row.old.startsWith('/wp-content/')) continue;
  test(`${row.old} still works`, () => {
    if (row.old === row.next) {
      assert.ok(existsSync(pageFile(row.next)), `${pageFile(row.next)} should exist`);
    } else {
      assert.equal(rules.get(row.old)?.to, row.next, `_redirects should send ${row.old} to ${row.next}`);
    }
  });
}

// Pages matches paths exactly, so /cart and /cart/ each need a rule.
test('every exact redirect works with and without the trailing slash', () => {
  for (const [from, { to }] of rules) {
    if (from.includes('*')) continue;
    const twin = from.endsWith('/') ? from.slice(0, -1) : `${from}/`;
    assert.equal(rules.get(twin)?.to, to, `add "${twin} ${to} 301" next to ${from}`);
  }
});

test('every internal redirect target is a real page', () => {
  for (const { to } of rules.values()) {
    if (to.startsWith('http') || to.includes(':splat')) continue;
    assert.ok(existsSync(pageFile(to.split('#')[0])), `${to} has no page`);
  }
});

// Splats need the trailing slash, so /shop/* misses a bare /shop.
test('every /x/* splat has a rule for the bare /x', () => {
  for (const from of rules.keys()) {
    if (!from.endsWith('/*')) continue;
    const bare = from.slice(0, -2);
    assert.ok(rules.has(bare), `add "${bare} ..." next to ${from}`);
  }
});

// Old PDF links: each PDF listed in docs/inventory.md is either republished or redirected.
test('every PDF in the inventory exists under public/files or has its own redirect', () => {
  const docs = readFileSync('docs/inventory.md', 'utf8');
  const section = docs.slice(docs.indexOf('## Documents'), docs.indexOf('## Open questions'));
  const pdfs = [...section.matchAll(/`(\d{4}\/\d{2}\/[^`]+\.pdf)`/g)].map((m) => m[1]);
  assert.ok(pdfs.length > 0, 'no PDFs found in docs/inventory.md');
  for (const pdf of pdfs) {
    const kept = existsSync(`public/files/${pdf}`);
    const redirected = rules.has(`/wp-content/uploads/${pdf}`);
    assert.ok(kept || redirected, `${pdf}: add it under public/files/ or redirect it`);
  }
});

// Events with their own page must point at one that exists; the rest get /events/<id>/.
test('every event that names its own page has that page', () => {
  for (const file of readdirSync('src/content/events').filter((f) => f.endsWith('.md'))) {
    const page = readFileSync(`src/content/events/${file}`, 'utf8').match(/^page:\s*(\S+)/m)?.[1];
    if (page) assert.ok(existsSync(pageFile(page)), `${file}: ${pageFile(page)} should exist`);
  }
});

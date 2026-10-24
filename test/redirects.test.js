// Every old URL people or search engines know must keep working after the move.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

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
  return `src/pages/${name}.astro`;
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

test('every internal redirect target is a real page', () => {
  for (const { to } of rules.values()) {
    if (to.startsWith('http') || to.includes(':splat')) continue;
    assert.ok(existsSync(pageFile(to.split('#')[0])), `${to} has no page`);
  }
});

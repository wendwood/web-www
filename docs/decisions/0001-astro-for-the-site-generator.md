# 0001: Build the site with Astro

**Date:** 2026-10-23 · **Status:** Accepted

## Context
The standard generated static site is Python + Jinja2. This site is edited mostly by a volunteer webmaster who knows HTML and WordPress, not Python, and the site has prose pages and events that suit Markdown.

## Decision
Use Astro with static output and no UI framework. Pages are `.astro` files (HTML with a frontmatter block); prose and events are Markdown content collections with schema checks.

## Alternatives rejected
- **Python + Jinja2 (the standard):** a second language and toolchain for the webmaster to learn, and no built-in content validation.
- **Eleventy:** workable, but no schema-checked content collections.

## Consequences
Node toolchain in CI (`npm ci --ignore-scripts`, Dependabot for npm). Astro major upgrades are a maintenance task.

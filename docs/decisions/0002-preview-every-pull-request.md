# 0002: Deploy a preview for every pull request

**Date:** 2026-10-23 · **Status:** Accepted

## Context
The static-site standard uses one disposable `preview` branch. Here a webmaster and a maintainer work in parallel, and the webmaster reviews changes visually, not by reading diffs.

## Decision
CI deploys every PR to `<branch>.wendwood-www.pages.dev` and production on merge to `main`. `main` is protected: changes arrive only by PR with CI green.

## Alternatives rejected
- **Single `preview` branch:** one change at a time blocks two people working at once.
- **Cloudflare's Git integration:** builds outside our CI, so the guard and tests wouldn't gate deploys.

## Consequences
One preview alias per branch; delete branches after merging.

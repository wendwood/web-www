# 0003: Bookings, forms and memberships are separate systems

**Date:** 2026-10-23 · **Status:** Accepted

## Context
Party bookings, contact forms and a possible replacement for the membership vendor all handle personal data (names, contact details, payments, waivers). Under `_standards/tiers.md` that is T1–T2, which needs a credential-holding app tier separate from anything internet-facing. Running it as Pages Functions with a database in this repo would put credentials and data on the edge.

## Decision
This repo stays a T0 static site. Systems that collect data are built and hosted elsewhere, and the site links to them. Until party bookings exist, `/parties/` shows a notice (`pool.parties.bookingOpen`); contact is by email.

## Alternatives rejected
- **Pages Functions + D1 here:** breaks the tier rules and mixes webmaster edits with payment code.

## Consequences
The site can be public with simple review rules. Linking to a new system is a one-line change in `pool.ts`.

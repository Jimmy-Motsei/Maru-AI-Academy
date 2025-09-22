# Module 3 — Adapters & Persistence: Save, Search, and Sync Leads

**Project:** Maru AI Academy  
**Version:** 1.0 • **Date:** 2025-09-22

## What you’ll build
Extend your Module 2 API by adding **persistent storage** and **import/export adapters**. You’ll save scored leads to a database, list/filter them, and support CSV import/export. We’ll keep it simple with **SQLite** for local dev (file-based DB), and discuss upgrading to Postgres later.

## Learning outcomes
- Understand persistence trade-offs (SQLite vs Postgres; ORMs vs query builders).
- Add a data access layer (DAL) with clear interfaces and pure domain logic.
- Implement CRUD endpoints: create (score+save), list with filters, export CSV.
- Write request tests that hit the DB safely (using a temp DB per test run).
- Design import pipelines (CSV → API) with validation and error handling.

## Structure
- `/code` — Express + TypeScript service with SQLite (better-sqlite3).
- `/scripts` — Instructor scripts for each section.
- `/exercises` — Labs (CSV import, filters, exports).
- `/quizzes` — Knowledge check.
- `/prompts` — Copilot/Cursor prompts for DAL, tests, and adapters.
- `/rubrics` — Review checklist for data layer quality.
- `/lesson-plans` — Timing & flow.
- `/slides` — Outline for presentation.

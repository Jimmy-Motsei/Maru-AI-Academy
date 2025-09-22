# Lab — Add Persistence & CSV Import/Export

**Goal:** Persist scored leads and support CSV import/export.

## Steps
1) Install deps and run migration to create `leads` table.  
2) Implement DAL methods: `saveLead`, `listLeads`, `exportCsv`.  
3) Create routes: `POST /leads` (score+save), `GET /leads` (filters), `GET /leads/export`.  
4) Implement `POST /leads/import` (CSV upload) with validation and error report.  
5) Write request tests for: create, list w/ filters, export, import (partial failure).

## Stretch
- Add `text` index or simple `LIKE` search on `message`.  
- Add pagination with `limit` + `cursor` (or `offset`).  
- Add Postgres notes/config for staging.

# Cursor/Copilot Prompts — Module 3

**System:** You are a senior TypeScript engineer. Separate domain logic, DAL, and routes. Cover edge cases.

**Scaffold DAL**
“Create `src/dal.ts` exposing functions for `initDb`, `saveLead`, `listLeads(filters)`, `findLead(id)`, `deleteLead(id)`, `exportCsv`. Use `better-sqlite3`. Leads schema: id TEXT PK, created_at TEXT ISO, name TEXT, company TEXT, message TEXT, budget TEXT, urgency TEXT, notes TEXT, score INTEGER, segment TEXT.”

**Routes**
“Add routes: POST `/leads` (validate with Zod, call `scoreLead`, then `saveLead`), GET `/leads` (filters: segment, minScore, q, from, to), GET `/leads/export` (CSV), POST `/leads/import` (CSV in text body). Return problem+json errors.”

**Tests**
“Add request tests creating a temp DB per run. Validate filters, export CSV headers, and import partial failures.”

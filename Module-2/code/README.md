# Lead Scoring API (Module 2)

## Quick start
```bash
# Inside Module-2/code
pnpm i   # or: npm i
pnpm dev # or: npm run dev
```

## Test
```bash
pnpm test
```

## Endpoints
- `GET /health` → `{ ok: true }`
- `POST /score` with JSON body:
```json
{ "message": "Need a quote for a hotel CRM, ASAP", "budget": "20000" }
```

### cURL
```bash
curl -s http://localhost:3000/score \  -H "Content-Type: application/json" \  -d '{ "message":"Need a quote for a lodge CRM, urgent", "budget":"15000" }'
```

## Scripts
- `dev` — run with live reload
- `test` — Vitest
- `build` — TypeScript compile
- `start` — run built JS

## Notes
- Input validation uses **Zod**.
- Errors return `application/problem+json` with 422 for validation.
- Body size limited to 32kb.

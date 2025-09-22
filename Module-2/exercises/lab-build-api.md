# Lab — Build & Test the Lead Scoring API

**Goal:** Ship a POST `/score` endpoint that accepts a JSON lead and returns `{ score, segment }`.

## Steps
1) Install deps and run dev server.  
2) Implement `leadScorer.ts` (weights from Module 1 rubric).  
3) Add/extend Zod schema to match your fields.  
4) Write unit tests covering 3 edge cases.  
5) Add one request test that hits `/score`.  
6) Start the server, test with curl or Postman.  
7) Commit and push.

## Stretch
- Add CORS for a frontend origin.
- Add simple request logging with a request id header.
- Dockerize and run `docker run -p 3000:3000 lead-api`.

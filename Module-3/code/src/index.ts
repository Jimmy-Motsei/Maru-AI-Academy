import express from 'express';
import cors from 'cors';
import { initDb } from './lib/dal.js';
import { leadsRouter } from './routes/leads.js';

const app = express();
app.use(express.json({ limit: '64kb' }));
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));

// Initialize DB
const dbPath = process.env.DB_PATH || ':memory:';
const db = initDb(dbPath);

// Health
app.get('/health', (_req, res) => res.json({ ok: true }));

// Routes with injected DAL
app.use('/leads', leadsRouter(db));

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Lead service (persisted) listening on ${port}`);
});

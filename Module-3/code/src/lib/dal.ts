import Database from 'better-sqlite3';
import { customAlphabet } from 'nanoid';

const id = customAlphabet('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz', 12);

export type Lead = {
  id?: string;
  created_at?: string;
  name?: string;
  company?: string;
  message: string;
  budget?: string;
  urgency?: string;
  notes?: string;
  score: number;
  segment: 'Hot'|'Warm'|'Nurture';
};

export type Filters = {
  segment?: 'Hot'|'Warm'|'Nurture';
  minScore?: number;
  q?: string;
  from?: string; // ISO date
  to?: string;   // ISO date
};

export function initDb(path = ':memory:') {
  const db = new Database(path);
  db.pragma('journal_mode = WAL');
  db.exec(`CREATE TABLE IF NOT EXISTS leads (
    id TEXT PRIMARY KEY,
    created_at TEXT NOT NULL,
    name TEXT,
    company TEXT,
    message TEXT NOT NULL,
    budget TEXT,
    urgency TEXT,
    notes TEXT,
    score INTEGER NOT NULL,
    segment TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at);
  CREATE INDEX IF NOT EXISTS idx_leads_segment ON leads(segment);
  `);
  return db;
}

export function saveLead(db: any, lead: Lead): Lead {
  const now = new Date().toISOString();
  const _id = lead.id || id();
  const stmt = db.prepare(`INSERT INTO leads
    (id, created_at, name, company, message, budget, urgency, notes, score, segment)
    VALUES (@id, @created_at, @name, @company, @message, @budget, @urgency, @notes, @score, @segment)`);
  stmt.run({
    id: _id,
    created_at: now,
    name: lead.name || null,
    company: lead.company || null,
    message: lead.message,
    budget: lead.budget || null,
    urgency: lead.urgency || null,
    notes: lead.notes || null,
    score: lead.score,
    segment: lead.segment
  });
  return { ...lead, id: _id, created_at: now };
}

export function listLeads(db: any, f: Filters = {}) {
  const clauses: string[] = [];
  const params: any = {};
  if (f.segment) { clauses.push('segment = @segment'); params.segment = f.segment; }
  if (typeof f.minScore === 'number') { clauses.push('score >= @minScore'); params.minScore = f.minScore; }
  if (f.q) { clauses.push('message LIKE @q'); params.q = `%${f.q}%`; }
  if (f.from) { clauses.push('created_at >= @from'); params.from = f.from; }
  if (f.to) { clauses.push('created_at <= @to'); params.to = f.to; }
  const where = clauses.length ? 'WHERE ' + clauses.join(' AND ') : '';
  const rows = db.prepare(`SELECT * FROM leads ${where} ORDER BY created_at DESC`).all(params);
  return rows;
}

export function removeLead(db: any, id: string) {
  const info = db.prepare('DELETE FROM leads WHERE id = ?').run(id);
  return info.changes > 0;
}

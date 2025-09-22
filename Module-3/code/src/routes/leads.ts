import { Router } from 'express';
import { z } from 'zod';
import { saveLead, listLeads, removeLead } from '../lib/dal.js';
import { scoreLead } from './scoring.js';

const LeadIn = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(5),
  budget: z.string().optional(),
  urgency: z.string().optional(),
  notes: z.string().optional(),
});

const Filters = z.object({
  segment: z.enum(['Hot','Warm','Nurture']).optional(),
  minScore: z.coerce.number().optional(),
  q: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
});

export function leadsRouter(db: any) {
  const r = Router();

  // Create: score + save
  r.post('/', (req, res) => {
    const parsed = LeadIn.safeParse(req.body);
    if (!parsed.success) return res.status(422).json({ title:'Validation Error', detail: parsed.error.flatten() });
    const scored = scoreLead(parsed.data);
    const saved = saveLead(db, scored as any);
    res.status(201).json(saved);
  });

  // List with filters
  r.get('/', (req, res) => {
    const parsed = Filters.safeParse(req.query);
    if (!parsed.success) return res.status(400).json({ title:'Bad Request', detail: parsed.error.flatten() });
    const rows = listLeads(db, parsed.data as any);
    res.json(rows);
  });

  // Delete
  r.delete('/:id', (req, res) => {
    const ok = removeLead(db, req.params.id);
    res.status(ok ? 204 : 404).end();
  });

  // Export (CSV)
  r.get('/export', (_req, res) => {
    res.setHeader('Content-Type','text/csv; charset=utf-8');
    res.setHeader('Content-Disposition','attachment; filename="leads.csv"');
    const rows = listLeads(db, {});
    const header = 'id,created_at,name,company,message,budget,urgency,notes,score,segment\n';
    const body = rows.map((x: any) => [
      x.id, x.created_at, x.name||'', x.company||'', (x.message||'').replaceAll('\n',' '),
      x.budget||'', x.urgency||'', x.notes||'', x.score, x.segment
    ].map(String).map(s => s.replaceAll('"','""')).map(s => f'"{s}"').join(',')).join('\n');
    res.send(header + body + '\n');
  });

  return r;
}

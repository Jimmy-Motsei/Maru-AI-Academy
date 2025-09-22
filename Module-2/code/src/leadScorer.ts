export type Lead = {
  name?: string;
  company?: string;
  message: string;
  budget?: number | string;
  urgency?: string;
  notes?: string;
};

export type ScoreResult = {
  score: number;
  segment: 'Hot' | 'Warm' | 'Nurture';
  rationale: string;
};

function weightIntent(message: string): number {
  const good = /(request|quote|proposal|demo|hire|buy|subscription|trial)/i.test(message);
  const specific = message.length > 60;
  return (good ? 15 : 5) + (specific ? 10 : 0);
}

function weightBudget(budget?: number | string): number {
  if (typeof budget === 'number') return Math.min(25, budget > 0 ? 20 : 5);
  if (typeof budget === 'string' && /\d/.test(budget)) return 20;
  if (typeof budget === 'string' && /(budget|price|cost|afford)/i.test(budget)) return 15;
  return 5;
}

function weightUrgency(urgency?: string, message?: string): number {
  const src = (urgency || '') + ' ' + (message || '');
  if (/today|tomorrow|asap|this week|urgent|deadline/i.test(src)) return 22;
  if (/next month|soon|quarter/i.test(src)) return 15;
  return 8;
}

function weightFit(message: string): number {
  const fit = /(hotel|lodge|dentist|clinic|b2b|sme|hospitality|tourism|sales lead|crm)/i.test(message);
  return fit ? 22 : 10;
}

export function scoreLead(lead: Lead): ScoreResult {
  const intent = weightIntent(lead.message);
  const budget = weightBudget(lead.budget);
  const urgency = weightUrgency(lead.urgency, lead.message);
  const fit = weightFit(lead.message);

  const score = Math.max(0, Math.min(100, intent + budget + urgency + fit));
  const segment = score >= 80 ? 'Hot' : score >= 50 ? 'Warm' : 'Nurture';
  const rationale = `intent:${intent}, budget:${budget}, urgency:${urgency}, fit:${fit}`;
  return { score, segment, rationale };
}

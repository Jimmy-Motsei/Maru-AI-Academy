export type LeadIn = {
  name?: string;
  company?: string;
  message: string;
  budget?: string;
  urgency?: string;
  notes?: string;
};

export type LeadScored = LeadIn & {
  id?: string;
  created_at?: string;
  score: number;
  segment: 'Hot'|'Warm'|'Nurture';
};

function wIntent(message: string): number {
  const good = /(request|quote|proposal|demo|hire|buy|subscription|trial)/i.test(message);
  const specific = message.length > 60;
  return (good ? 15 : 5) + (specific ? 10 : 0);
}
function wBudget(budget?: string): number {
  if (!budget) return 5;
  if (/\d/.test(budget)) return 20;
  if (/(budget|price|cost|afford)/i.test(budget)) return 15;
  return 8;
}
function wUrgency(urgency?: string, message?: string): number {
  const src = (urgency || '') + ' ' + (message || '');
  if (/today|tomorrow|asap|this week|urgent|deadline/i.test(src)) return 22;
  if (/next month|soon|quarter/i.test(src)) return 15;
  return 8;
}
function wFit(message: string): number {
  const fit = /(hotel|lodge|dentist|clinic|b2b|sme|hospitality|tourism|sales lead|crm)/i.test(message);
  return fit ? 22 : 10;
}

export function scoreLead(lead: LeadIn) {
  const intent = wIntent(lead.message);
  const budget = wBudget(lead.budget);
  const urgency = wUrgency(lead.urgency, lead.message);
  const fit = wFit(lead.message);
  const score = Math.max(0, Math.min(100, intent + budget + urgency + fit));
  const segment = score >= 80 ? 'Hot' : score >= 50 ? 'Warm' : 'Nurture';
  return { ...lead, score, segment };
}

import { describe, it, expect } from 'vitest';
import { scoreLead } from '../src/leadScorer';

describe('scoreLead', () => {
  it('scores a hot lead', () => {
    const r = scoreLead({
      message: 'Request a demo for our hotel CRM, budget around 40k, need ASAP',
      budget: '40000',
      urgency: 'ASAP'
    });
    expect(r.segment).toBe('Hot');
  });

  it('scores a nurture lead for vague message', () => {
    const r = scoreLead({ message: 'Hi' });
    expect(r.segment === 'Nurture' || r.score < 50).toBe(true);
  });

  it('handles numeric budget', () => {
    const r = scoreLead({ message: 'Quote for dental CRM', budget: 10000 });
    expect(r.score).toBeGreaterThan(50);
  });
});

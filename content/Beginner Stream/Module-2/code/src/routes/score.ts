import { Router } from 'express';
import { z } from 'zod';
import { scoreLead } from '../leadScorer.js';

export const scoreRouter = Router();

const LeadSchema = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(5),
  budget: z.union([z.number(), z.string()]).optional(),
  urgency: z.string().optional(),
  notes: z.string().optional(),
});

scoreRouter.post('/', (req, res, next) => {
  const parsed = LeadSchema.safeParse(req.body);
  if (!parsed.success) {
    const err: any = new Error(parsed.error.issues.map(i => i.message).join('; '));
    err.status = 422;
    err.title = 'Validation Error';
    return next(err);
  }
  const result = scoreLead(parsed.data);
  res.json(result);
});

import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import { scoreRouter } from '../src/routes/score';

describe('POST /score', () => {
  const app = express();
  app.use(express.json());
  app.use('/score', scoreRouter);

  it('returns 422 on invalid payload', async () => {
    const res = await request(app).post('/score').send({});
    expect(res.status).toBe(422);
  });

  it('returns a score for valid lead', async () => {
    const res = await request(app).post('/score').send({ message: 'Need a quote for a lodge website, urgent', budget: '15000' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('score');
    expect(res.body).toHaveProperty('segment');
  });
});

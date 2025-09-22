import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import express from 'express';
import { initDb } from '../src/lib/dal';
import { leadsRouter } from '../src/routes/leads';

describe('leads routes', () => {
  let app: any;
  beforeEach(() => {
    const db = initDb(':memory:');
    app = express();
    app.use(express.json());
    app.use('/leads', leadsRouter(db));
  });

  it('creates and lists leads', async () => {
    const res = await request(app).post('/leads').send({ message: 'Need a quote for hotel CRM ASAP', budget: '20000' });
    expect(res.status).toBe(201);
    const list = await request(app).get('/leads').query({ segment: 'Hot' });
    expect(list.status).toBe(200);
    expect(Array.isArray(list.body)).toBe(true);
  });

  it('exports CSV', async () => {
    await request(app).post('/leads').send({ message: 'dentist crm', budget: '10000' });
    const res = await request(app).get('/leads/export');
    expect(res.status).toBe(200);
    expect(res.text.split('\n')[0]).toContain('id,created_at');
  });
});

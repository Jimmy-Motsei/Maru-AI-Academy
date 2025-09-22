import express from 'express';
import cors from 'cors';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { scoreRouter } from './routes/score.js';

const app = express();
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

app.use(express.json({ limit: '32kb' }));
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(pinoHttp({ logger }));

app.get('/health', (_, res) => res.json({ ok: true }));
app.use('/score', scoreRouter);

// Global error handler with problem+json
app.use((err: any, _req: any, res: any, _next: any) => {
  const status = err.status || 400;
  const problem = {
    type: 'about:blank',
    title: err.title || 'Bad Request',
    status,
    detail: err.message || 'Invalid request',
  };
  res.status(status).type('application/problem+json').send(problem);
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  logger.info({ port }, 'Lead scoring API listening');
});

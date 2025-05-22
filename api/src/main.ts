import express from 'express';
import cors from 'cors';
import { getLogger } from './log/logger';

const app = express();
const logger = getLogger();

app.use(cors());
app.use((req, _res, next) => {
  req.log = logger;
  next();
});

app.use((req, _res, next) => {
  req.log.info(`received: ${req.method.toUpperCase()} ${req.url}`);
  next();
});

app.get('/api/ping', (_req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  logger.info('Starting...');
});

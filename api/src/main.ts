import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use((req, _res, next) => {
  // console.log(`${new Date().toDateString()} -> ${req.url}`);
  next();
});

app.get('/api/ping', (_req, res) => {
  res.send('Hello World!');
});

app.listen(3000);

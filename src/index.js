import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './config/server';

const app = express();

app.use(bodyParser.json());

app.use(cors(config.corsOptions));

app.get('/', (req, res, next) => {
  res.send({
    response: 'Hello World!'
  });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
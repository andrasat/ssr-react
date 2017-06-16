import express from 'express';
import webpack from 'webpack';

import render = from '../dist/assets/SSR';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', render.default);

const server = app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

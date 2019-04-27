import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';

const app = express();

app.listen(config.get('port'), () => {
  console.log(`Listening on port ${config.get('port')}`);
})

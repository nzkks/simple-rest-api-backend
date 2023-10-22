import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http';
import mongoose from 'mongoose';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});

const MONGO_URI =
  'mongodb+srv://nzkks:mPvXilebKyuKcNnT@cluster0.nep9mt8.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on('error', (error: Error) => console.log(error));

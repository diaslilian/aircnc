import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import socketio from 'socket.io';
import http from 'http';

import routes from './routes';

const app = express();
const server = http.Server(app);
const io = socketio(server);


mongoose.connect(
  'mongodb+srv://omnistack:omnistack@omnistack-eb6zm.mongodb.net/semana09?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connectedUsers = {};

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);

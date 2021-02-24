const express = require('express');
const server = express();

const userRouter = require('./users/router');
const authRouter = require('./auth/router');

server.use(express.json());
server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);

server.get('/', (_, res) => [res.send('Run api run')]);

server.use('*', (_, res) => {
  res.status(404).json({ message: '404 Not found' });
});

module.exports = server;

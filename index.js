// code away!
require('dotenv').config();

const express = require('express');
const server = express();

const userRoutes = require('./users/userRoutes');
const postRoutes = require('./posts/postRoutes');

server.use(express.json());
server.use('/users', userRoutes);
server.use('/posts', postRoutes);

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log('Server running on http://localhost:5000')
);
// code away!
const express = require('express');
const server = express();

const userRoutes = require('./users/userRoutes');
const postRoutes = require('./posts/postRoutes');

server.use(express.json());
server.use('/users', userRoutes);
server.use('/posts', postRoutes);

server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);
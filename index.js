// code away!
const express = require('express');

const userRoutes = require('./users/userRoutes');
const postRoutes = require('./posts/postRoutes');

const router = express.Router();

router.user('/users', userRoutes);
router.user('/posts', postRoutes);

server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);
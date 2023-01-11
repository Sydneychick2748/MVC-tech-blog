    // This file is the main entry point for all of the API routes
const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
//   const { User, Post, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)



module.exports = router;

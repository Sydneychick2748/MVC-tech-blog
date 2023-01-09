
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post,User,Comment} = require('../models');
const withAuth = require('../utils/auth');
//
// // get all posts for homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {

        res.status(500).json(err);
    }
});

// get one post
router.get('/edit/:id', withAuth, async(req, res) =>{
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const post = postData.get({ plain: true });
        res.render('edit', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }

});

//  this is the route to get new post
router.get('/new', (req, res) => {
    res.render('add-post', {
        loggedIn: true
    })
})

module.exports = router;


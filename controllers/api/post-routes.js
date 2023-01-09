const router = require('express').Router();
const { User,Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');
// this is the route to get all post
router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const commentData = await Comment.findAll({
        include: [{
          model: User,
          attributes: ["username"],
      },
      {
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
              model: User,
              attributes: ["username"],
          },
      },
  ],
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// this is the route to get a single post
  router.get("/:id",async (req, res) => {
    try {
      const commentData = await Comment.findByPk(req.params.id, {
        attributes: ["id", "content", "title", "created_at"],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
      });
      if (!commentData) {
        res.status(404).json({ message: "No user was found with this id!" });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  );

// this   is the route to create a post
  router.post('/', async (req, res) => {
    try {
      
      const commentData = await Comment.create(req.body);
      Post.create({
        title: req.body.title,
        content: req.body.post_content,
        user_id: req.session.user_id
    })
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  );

  // this is the route to update a post
 
  router.put("/:id", withAuth,async (req, res) => {
    try {
      const commentData = await Comment.update(req.body);
      Post.update({
        title: req.body.title,
            content: req.body.post_content,
        }, {
            where: {
                id: req.params.id,
            },
        })
      if (!commentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  );


// this is the route to delete a post 
  router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!commentData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  );

  module.exports = router;


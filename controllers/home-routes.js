const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["id", "post_text", "title", "created_at"],
      
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
           
          ],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: ["id", "post_text", "title",  "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
           
          ],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    const post = postData.get({ plain: true });
    res.render("single-post", {
      post,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all posts for dashboard

    
//  
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
// get all posts for homepage
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;

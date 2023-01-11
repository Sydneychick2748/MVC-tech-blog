const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// this is the route to get all comments
// router.get("/", async (req, res) => {
//   try {
//    const commentData = await Comment.findAll({
      
//     });
//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// this is the route to get a single comment

// router.post("/", withAuth, async (req, res) => {
//   try {
//     const commentData = await Comment.create({
//       comment_text: req.body.comment_text,
//       user_id: req.session.user_id,
//       post_id: req.body.post_id,
    
//     });
//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(400).json(err);
  
//   }
// });

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(commentData)

        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;



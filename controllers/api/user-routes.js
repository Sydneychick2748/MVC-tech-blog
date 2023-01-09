const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.username = userData.username;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// Get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  gets one user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: {
        exclude: ['password']
    },
    
    include: [{
            model: Post,
            attributes: ['id', 'title', 'content', 'created_at']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'created_at'],
            include: {
                model: Post,
                attributes: ['title']
            }
        }
    ]
})

    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    
    req.session.save(() => {
      
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//  // this is the route to login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne(req.body.username);
   
    if (!userData) {
      res.status(400).json({ message: "Incorrect user, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({
        user: userData,
        message: "You are now logged in!",
      });
    });
    //  // this is the route to login
    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }
    req.session.user_id = userData.id;
    req.session.username = userData.username;
    req.session.logged_in = true;

    res.json({ user: userData, message: "You are now logged in!" });
  } catch (err) {
    res.status(400).json(err);
  }
});

//  // this is the route to logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// @route GET api/posts
// @desc Get All Posts
// @access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts));
});

// @route POST api/posts
// @desc Create a Post
// @access Public
router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  newPost.save().then((post) => res.json(post));
});

module.exports = router;

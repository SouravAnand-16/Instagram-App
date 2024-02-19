const express = require('express');
const postController = require("../controller/postController")
const auth = require("../middleware/auth")
const PostRouter = express.Router();

PostRouter.post('/addPost',auth, postController.addPost);

module.exports = PostRouter;

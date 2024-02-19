const express = require("express") ;
const postController = require("../controller/postController") ;
const multer = require("multer") ;
const upload = multer({dest:"upload/"}) ;
const auth = require("../middleware/auth");



const PostRouter = express.Router() ;

PostRouter.post("/addPost",auth,upload.single('photo'),postController.addPost);


module.exports = PostRouter ;

const express = require("express") ;
const path = require("path") ;
const multer = require("multer") ;
const auth = require("../middleware/auth");
const PostModel = require("../model/postModel");
const upload = multer({dest:"upload/"}) ;


const PostRouter = express.Router() ;

PostRouter.post("/addPost",auth,upload.single("photo"),async(req,res)=>{
    try{
        const photo = req.file.path ;
        const post = new PostModel({...req.body,photo:photo}) ;
        await post.save() ;
        res.status(200).send({"msg":"Post added successfully"}) ;
    }catch(error){
        res.status(500).send({"msg":error.message});
    }
}) ;

module.exports = PostRouter ;

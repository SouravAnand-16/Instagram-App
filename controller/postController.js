const PostModel = require("../model/postModel") ;

exports.addPost = async(req,res)=>{
    try{
        const { quote , device , commentCount} = req.body ;
        const userId = req.body.userID ;
        const photoPath = req.file.path ;
        const post = new PostModel({quote,photoPath,device,commentCount,userId});
        await post.save() ;
        res.status(200).send({"msg":"Uploaded post...."});
    }catch(error){
        console.log(error);
        res.status(500).send({"msg":error}) ;
    }
};

const mongoose = require("mongoose") ;

const postSchema = mongoose.Schema({
     quote : {
        type : String ,
     },
     photo : {
        type : String ,
     },
     device : {
        type : String ,
     },
     commentCount : {
        type : String 
     },
     userID : {
        type : String
     }
},{
    versionKey : false
});

const PostModel = mongoose.model("post",postSchema) ;

module.exports = PostModel ;
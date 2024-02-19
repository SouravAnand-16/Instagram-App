const mongoose = require("mongoose") ;

const postSchema = mongoose.Schema({
     quote : {
        type : String ,
        required : true 
     },
     photo : {
        type : String ,
        required : true 
     },
     device : {
        type : String ,
     },
     commentCount : {
        type : String 
     },
     userID : {
        type :mongoose.Schema.Types.ObjectId ,
        ref : "user"
     }
},{
    versionKey : false
});

const PostModel = mongoose.model("post",postSchema) ;

module.exports = PostModel ;
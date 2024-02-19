const mongoose = require("mongoose") ;

const userSchema = mongoose.Schema({
        username : {
            type : String ,
            required : true ,
            unique : true
        },
        email : {
            type : String ,
            required : true ,
            unique : true 
        },
        password : {
            type : String ,
        },
        city : {
            type : String ,
        },
        age : {
            type : Number 
        },
        gender : {
             type : String ,
             required : true 
        }
},{
    versionKey : false 
});

const UserModel = mongoose.model("user",userSchema) ;

module.exports = UserModel ;

// username, email, password, city, age and gender.
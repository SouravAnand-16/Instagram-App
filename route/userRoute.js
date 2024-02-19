const UserModel = require("../model/UserModel") ;
const express = require("express") ;

const UserRouter = express.Router() ;

UserRouter.post("/register",registerValidator,async(req,res)=>{
    try{
        res.status(200).send({"msg":"Registation success"}) ;
    }catch(error){
        res.status(500).send({"msg":error.message}) ;
    }
});

module.exports = UserRouter ;
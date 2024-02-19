const UserModel = require("../model/UserModel") ;
const express = require("express") ;
const registerValidator = require("../middleware/registerValidator") ;
const loginValidator = require("../middleware/loginValidator");
const BlacklistModel = require("../model/blacklistModel");

const UserRouter = express.Router() ;

UserRouter.post("/register",registerValidator,async(req,res)=>{
    try{
        res.status(200).send({"msg":"Registation success"}) ;
    }catch(error){
        res.status(500).send({"msg":error.message}) ;
    }
});

UserRouter.post("/login",loginValidator,async(req,res)=>{
    try{
          res.status(200).send({"msg":"Login success","accessToken":req.accessToken}) ;
    }catch(error){
        res.status(500).send({"msg":error.message}) ;
    }
})

UserRouter.post("/logout",async(req,res)=>{
    try{
        const accessToken = req.headers.authorization?.split(" ")[1] ;
        if(!accessToken){
            return res.status(400).send({"msg":"Token is missing"}) ;
        }else{
            const token = new BlacklistModel({"token":accessToken}) ;
            await token.save() ;
            res.status(200).send({"msg":"Logout success"}) ;
        }
    }catch(error){
       console.log(error.message) ;
    }
})

module.exports = UserRouter ;
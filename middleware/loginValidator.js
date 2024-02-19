const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt") ;
const jwt = require("jsonwebtoken") ;

const secretKey = process.env.SECRET_KEY ;

const loginValidator = async(req,res,next)=>{
    try{
        const { email , password } = req.body ;
        const user = await UserModel.findOne({email}) ;
        if(!user){
            return res.status(400).send({"msg":`User does not exist with email : ${email}. Please signup ..`}) ;
        }else{
            const result =  await  bcrypt.compare(password , user.password) ;
            if(!result){
                return res.status(400).send({"msg":"Password doesn't match..."}) ;
            }else{
               const token = jwt.sign({"userId":user._id,"username":user.username,"email":user.email},secretKey) ;
               req.accessToken = token ;
               req.username = user.username ;
               next() ;
            }
        }
    }catch(error){
        res.status(500).send({"msg":error.message}) ;
    }
};

module.exports = loginValidator ;
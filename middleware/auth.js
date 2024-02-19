const jwt = require("jsonwebtoken") ;
const BlacklistModel = require("../model/blacklistModel");

const secretKey = process.env.SECRET_KEY ;

const auth = async(req,res,next)=>{
    try{
          const token = req.headers.authorization?.split(" ")[1] ;
          if(!token){
            return res.status(400).send({"msg":"You are not auhtorized"}) ;
          }
          if(token){
            const isBlacklisted = await BlacklistModel.exists({"token":token}) ;
            if(isBlacklisted){
                return res.status(400).send({"msg":"Please login again..."});
            }else{
                const decode = jwt.verify(token,secretKey) ;
                req.body.userID = decode.userId  ;
                next() ;
            }
          }
    }catch(error){
        res.status(500).send({"msg":error.message}) ;
    }
};

module.exports = auth ;
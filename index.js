const express = require("express") ;
const cors = require("cors") ;
require("dotenv").config() ;
const  connection  = require("./connection");
const UserRouter = require("./route/userRoute");
const postRoute = require("./route/postRoute");
const auth = require("./middleware/auth")


const app = express() ;

app.use(express.json() , cors()) ;

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"This is a home page..."});
});

app.use("/user",UserRouter) ;
app.use("/post",postRoute) ;


app.listen(3000,async(req,res)=>{
    try{
         await connection ;
         console.log("Server is connected to DB");
         console.log(`Sever is running at http://localhost:${3000}`);
    }catch(error){
        console.log(error.message);
    }
});

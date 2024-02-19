const express = require("express") ;
const cors = require("cors") ;
const multer = require("multer") ;
require("dotenv").config() ;
const  connection  = require("./connection");
const UserRouter = require("./route/userRoute");
const PostRouter = require("./route/postRoute");
const postController = require("./controller/postController")

const app = express() ;

app.use(express.json() , cors()) ;
app.use('/uploads',express.static('uploads'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename : function (req,file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage});

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"This is a home page..."});
});

app.use("/user",UserRouter) ;
app.use("/post",PostRouter) ;


app.listen(3000,async(req,res)=>{
    try{
         await connection ;
         console.log("Server is connected to DB");
         console.log(`Sever is running at http://localhost:${3000}`);
    }catch(error){
        console.log(error.message);
    }
});

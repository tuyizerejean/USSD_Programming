const express =require('express');
const bodyParser=require("body-parser");
const mongoose=require('mongoose');

const app= express();

const PORT=800;

const database_url='';
mongoose.connect(database_url);
const db=mongoose.connection;
db.on('error',(err)=>{
    console.log(err);
})
db.once('open',()=>{
    console.log('database is running .')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.get('/',(req,res)=>{
    res.send('Success Message');
})



app.listen(PORT,()=>{
   console.log(`app is running on the port$PORT`); 
});

// router.post("/",(req,res)=>{
//     const {sessionId,serviceCode,phoneNumber,text}=req.body;
//     console.log('###############',req.body);
//     let response="";
// })



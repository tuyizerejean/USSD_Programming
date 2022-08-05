
const express=require('express');
const ussdRoute=require('./index');
const bodyParser=require("body-parser");

const app=express();
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`running on localHost:${PORT}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

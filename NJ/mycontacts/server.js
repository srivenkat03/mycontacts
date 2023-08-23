const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbconnect");
const dotenv=require("dotenv").config()

connectDB();
const app=express();

const port=process.env.PORT;

app.use(express.json());
app.use("/api/contacts",require("./routers/contactroute"));
app.use("/api/user",require("./routers/userroute"))

app.use(errorHandler)

app.listen(port,()=>{
    console.log('this is a demo contacts '+ port);
});
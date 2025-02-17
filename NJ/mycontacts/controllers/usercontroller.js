const asynhandler=require("express-async-handler");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const User=require("../models/usermodels");
//@desc registation
//@route POST /api/user/Regitration
//@access public
const Register=asynhandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({error:"All fields are mandatory"});
      throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400).json({error:"User already created"});
      throw new Error("User already registered!");
    }
  
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    })
    res.status(201).json({message:"user has been created"})
});

//@desc Login
//@route POST /api/user/Login
//@access public
const Login=asynhandler(async(req,res)=>{
    res.status(200).json({message:"Login of the user"});
})

//@desc current
//@route POST /api/user/Login
//@access private
const current=asynhandler(async(req,res)=>{
    res.status(200).json({message:"current information of the user"});
})


//@desc allusers
//@route GET /api/user/getall
//@access private
const allusers=asynhandler(async(req,res)=>{
  const users=User.find
})


module.exports={Register,Login,current,allusers};
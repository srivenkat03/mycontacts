const asynhandler=require("express-async-handler");
const bcrypt=require("bcrypt");
const User=require("../models/usermodels");
//@desc registation
//@route POST /api/user/Regitration
//@access public
const Register=asynhandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
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

module.exports={Register,Login,current};
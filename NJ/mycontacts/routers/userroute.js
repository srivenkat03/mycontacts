const express=require("express");
const router=express.Router(); 
const {Register,Login,current}=require("../controllers/usercontroller");

router.route("/Register").post(Register);
router.route("/Login").post(Login);
router.route("/current").post(current);

module.exports=router; 
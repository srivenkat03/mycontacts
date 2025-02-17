const express=require("express");
const router=express.Router(); 
const {Register,Login,current,allusers}=require("../controllers/usercontroller");

router.route("/Register").post(Register);
router.route("/Login").post(Login);
router.route("/current").post(current);
router.route("/all").get(allusers)

module.exports=router; 
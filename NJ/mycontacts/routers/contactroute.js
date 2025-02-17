const express=require("express");
const router=express.Router();
const {Getcontact,Createcontact,Deletecontact,Geteachcontact, Updatecontact} = require("../controllers/contactcontroller");


router.route('/create').get(Getcontact).post(Createcontact);
router.route('/:id').get(Geteachcontact).put(Updatecontact).delete(Deletecontact);

module.exports=router;

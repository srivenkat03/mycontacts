const asynhandler=require("express-async-handler");
const Contact=require("../models/contactmodels");
const { error } = require("jquery");
//@desc get all contacts
//@route GET /api/contacts
//@access public

const Getcontact=asynhandler( async (req,res)=>{
    const contact=await Contact.find();
    res.status(200).json(contact);
})

//@desc create new contact
//@route POST /api/contacts
//@access public

const Createcontact=asynhandler(async(req,res)=>{
    const{name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all the fields are mandatory!");
    }
    const contact=await Contact.create({name,email,phone});
    res.status(201).json(contact);
})

//@desc create new contact
//@route GET /api/contacts/:id
//@access public

const Geteachcontact=asynhandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
})

//@desc updating contact
//@route PUT /api/contacts/:id
//@access public

const Updatecontact=asynhandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    const updatedcontact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedcontact);
})

//@desc deleting contact
//@route DELETE /api/contacts/:id
//@access public

const Deletecontact=asynhandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
})

module.exports={Getcontact,Createcontact,Deletecontact,Geteachcontact,Updatecontact};

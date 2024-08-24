// * Import contact Model
const contactModel = require('../models/contactModel');
// Create contact || POST
const createContactController = async(req,res)=>{
  try {
    // * taking data fron req.body
    const {name,email,phone} = req.body;
    // * Varification
    if(!name || !email || !phone){
      return res.status(500).send({
        success:false,
        message:"Please Provide all fields",
      })
    }

    // * create newcontact
    const newContact = new contactModel({name,email,phone});
    // * save newcontact to the database
    await newContact.save();
    res.status(201).send({
      success:true,
      message:"New contact created",
      newContact
    })
  } catch (error) {
    console.log(error).send({
      success:false,
      message:"Error in creating contact {createContactController} API",
      error
    })
  }
}


// Get all contact || GET
const getAllContactController = async(req,res)=>{
  try {
    const contacts = await contactModel.find({});
    if(!contacts){
      return res.status({
        success:false,
        message:"No Contact find"
      })
    }
    res.status(200).send({
      success:true,
      totalContact:contacts.length,
      contacts
    })
  } catch (error) {
    console.log(error).send({
      success:false,
      message:"Error in get all contact {getAllContactController} API",
      error
    })
  }
}

// get contact by id | GET
const getContactByIdController = async(req,res)=>{
  try {
    const contactId = req.params.id;
    if(!contactId){
      return res.status(404).send({
        success:false,
        message:"Please Provide id"
      })
    }
    const contact = await contactModel.findById(contactId);
    if(!contact){
      res.status(404).send({
        success:true,
        message:"No Contact Found"
      })
    }
    res.status(200).send({
      success:true,
      message:"Contact Found successfully",
      contact
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In get contact {getContactByIdController} API",
      error,
    });
  }
}

// Update contact | PUT
const updateContactController = async(req,res)=>{
  try {
    const contactId = req.params.id;
    if(!contactId){
      return res.status(404).send({
        success:false,
        message:"No Contact Id Found"
      });
    }

    const contact = await contactModel.findById(contactId);
    if(!contact){
      return res.status(404).send({
        success:false,
        message:"No Conatact Found"
      })
    }

    const {name,email,phone} = req.body;
    const updateContact = await contactModel.findByIdAndUpdate(contactId,{name,email,phone},{new:true})
    res.status(200).send({
      success:true,
      message:"Contact Updated Successfully",
      updateContact
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in update contact {updateContactController} API",
      error
    })
  }
}

module.exports = {createContactController,getAllContactController,getContactByIdController,updateContactController}
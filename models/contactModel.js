const mongoose = require('mongoose');
// schema
const contactSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please provide contact name"]
  },
  email:{
    type:String,
    required:[true,"Please provide contact email"]
  },
  phone:{
    type:String,
    required:[true,"Please add the contact phone number"],
  }
}, { timestamps: true })

// export
module.exports = mongoose.model("Contact", contactSchema)
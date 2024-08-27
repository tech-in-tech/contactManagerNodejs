const mongoose = require('mongoose');

// schema
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'User Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum:['male','female','other']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  profile: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
}, { timestamps: true })

// export
module.exports = mongoose.model("User", userSchema);

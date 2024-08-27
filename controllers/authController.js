const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const JWT= require('jsonwebtoken')

// * Register | POST
const registerController = async(req,res)=>{
  try {
    const {userName,email,password,phone} = req.body;
    // *validation
    if(!userName || !email || !password || !phone){
      return res.status(500).send({
        success:false,
        message:"Please Provide all field"
      })
    }

    // * check if user already exist or not
    const exisitingUser = await userModel.findOne({email:email});
    if(exisitingUser){
      return res.status(500).send({
        success:false,
        message:"Email already Registerid Please Login"
      })
    }
    // * Hashing password
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password,salt)
    // Creating new user
    const user = await userModel.create({
      userName,
      email,
      password : hashedPassword,
      phone,
    })
    res.status(201).send({
      success:true,
      message:"Successfully Registered",
      user:user
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registor API {registerController}",
      Error: error
    })
  }
}

//! -------------------------------------------------

//* Login | POST
const loginController = async(req,res)=>{
  try {
    const {email,password} = req.body;
    // * Validation
    if(!email || !password){
      return res.status(500).send({
        success:false,
        message:"Please Provide Email and Password"
      })
    }
    // * Find user
    const user = await userModel.findOne({email})
    // *Validation
    if(!user){
      return res.status(404).send({
        success:false,
        message:"User Not Found"
      })
    }

    // Compare user password

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(500).send({
        success:false,
        message:"Invalid Password",
      })
    }

    const token = JWT.sign({id:user._id},
      process.env.JWT_SECRET,{
        expiresIn:"10D"
      }
    )

    res.status(200).send({
      success:true,
      message:"Login Successfully",
      token,
      user
    })

  } catch (error) {
    console.log("LoginController :: ", error);
    res.status(500).send({
      success: false,
      message: 'Error in Login {loginController} API',
      error
    })
  }
}

module.exports = {registerController,loginController}
const testUserController = (req,res)=>{
  try {
    res.status(200).json({
      success:true,
      message:"Test contact-manager APIs"
    })
  } catch (error) {
    console.log(`testUserController :: ${error}`)
  }
}

module.exports = {testUserController}
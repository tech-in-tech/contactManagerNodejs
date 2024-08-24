// * Import express
const express = require('express')
const {testUserController} = require('../controllers/testController')

// * Router object
const router = express.Router();

// GET
router.get('/test-user',testUserController)



// *Export router object
module.exports = router
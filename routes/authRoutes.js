const express = require('express');
const { registerController, loginController } = require('../controllers/authController');
const router = express.Router();

//! Routes
// * Register | POST
router.post('/register',registerController)
router.post('/login',loginController)

// * Login | POST



module.exports = router;
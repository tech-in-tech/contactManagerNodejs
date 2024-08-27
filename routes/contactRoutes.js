// * import express
const express = require('express');
const { createContactController, getAllContactController, getContactByIdController, updateContactController, deleteContactController } = require('../controllers/contactController');
const authMiddleware = require('../middleware/authMiddleware');


// * Router object
const router  = express.Router();

// Contact Router
// 
router.post('/createContact',authMiddleware,createContactController)
router.get('/getAllContact',authMiddleware,getAllContactController)
router.get('/getContact/:id',authMiddleware,getContactByIdController)
router.put('/updateContact/:id',authMiddleware,updateContactController)
router.delete('/deleteContact/:id',authMiddleware,deleteContactController)



module.exports = router
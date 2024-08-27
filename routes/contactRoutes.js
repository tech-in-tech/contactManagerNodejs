// * import express
const express = require('express');
const { createContactController, getAllContactController, getContactByIdController, updateContactController, deleteContactController } = require('../controllers/contactController');


// * Router object
const router  = express.Router();

// Contact Router
// 
router.post('/createContact',createContactController)
router.get('/getAllContact',getAllContactController)
router.get('/getContact/:id',getContactByIdController)
router.put('/updateContact/:id',updateContactController)
router.delete('/deleteContact/:id',deleteContactController)



module.exports = router
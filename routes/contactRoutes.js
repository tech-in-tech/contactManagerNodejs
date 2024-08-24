// * import express
const express = require('express');
const { createContactController, getAllContactController, getContactByIdController, updateContactController } = require('../controllers/contactController');


// * Router object
const router  = express.Router();

// Router
// CREATE CONTACT
router.post('/createContact',createContactController)
router.get('/getAllContact',getAllContactController)
router.get('/getContact/:id',getContactByIdController)
router.put('/updateContact/:id',updateContactController)



module.exports = router
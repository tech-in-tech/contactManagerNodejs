// ! Packages
const express = require('express')
const cors = require('cors')
const color = require('colors');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv')
require('dotenv').config();
const db = require('./config/db')

// !Middlewares
// * to access data rom clint in JSON formate
app.use(express.json())

// * for cross origin error
app.use(cors())

// *tells API method ,ststus,time taken by API
app.use(morgan('dev'));

// !ROUTE
// *URL => http://localhost:5000
app.use('/api/v1/test',require('./routes/testRoute'))
app.use('/api/v1/contact',require('./routes/contactRoutes'))
app.use('/api/v1/auth',require("./routes/authRoutes"))

// !PORT
const PORT = process.env.PORT || 5000

// * Stsrt thr server and listen on port 5000
app.listen(PORT,()=>{
  console.log(`Server is running on PORT ${5000}`.bgYellow)
})


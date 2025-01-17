const express= require('express');
const app = new express();

const morgan = require('morgan')
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

require('dotenv').config();
require('./db/connection');

const employeeRoutes = require('./routes/employeeRoutes')
app.use('/employee', employeeRoutes);

const userRoutes = require('./routes/userRoutes')
app.use('/users',userRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

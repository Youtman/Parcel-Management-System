const express = require('express');
const cors = require('cors');
const app = express();

// INITIALIZE DB
require('./db/db')();

const userRoutes = require('./routes/user.routes');
const customerRoutes = require('./routes/customer.routes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api', userRoutes);
app.use('/api', customerRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

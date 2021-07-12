const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');

// Retrieve all customers
router.get('/customers', customerController.findAll);
// Create a new customer
router.post('/customers', customerController.create);
// Retrieve a single customer with id
router.get('/customer/:id', customerController.findOne);
// Update a customer with id
router.put('/customers/:id', customerController.update);
// Delete a customer with id
router.delete('/customers/:id', customerController.delete);

module.exports = router;

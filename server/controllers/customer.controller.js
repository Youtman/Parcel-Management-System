const Customer = require('../models/customer.model');

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  Customer.find()
    .then((customers) => {
      res.send(customers);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Something went wrong while getting the customers.',
      });
    });
};
// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({ message: 'Please fill all required field' });
  }
  // Create a new Customer
  const customer = new Customer({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
  });
  // Save customer in the database
  customer
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Something went wrong while creating new the customer.',
      });
    });
};
// Find a single User with a id
exports.findOne = (req, res) => {
  Customer.findById(req.params.id)
    .then((customer) => {
      if (!customer) {
        return res
          .status(404)
          .send({ message: 'Customer not found with id ' + req.params.id });
      }
      res.send(customer);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ message: 'Customer not found with id ' + req.params.id });
      }
      return res
        .status(500)
        .send({ message: 'Error getting customer with id ' + req.params.id });
    });
};
// Update a Customer identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).send({ message: 'Please fill all required field' });
  }
  // Find customer and update it with the request body
  Customer.findByIdAndUpdate(
    req.params.id,
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
    },
    { new: true }
  )
    .then((customer) => {
      if (!customer) {
        return res
          .status(404)
          .send({ message: 'customer not found with id ' + req.params.id });
      }
      res.send(customer);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ message: 'customer not found with id ' + req.params.id });
      }
      return res
        .status(500)
        .send({ message: 'Error updating customer with id ' + req.params.id });
    });
};
// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {
  Customer.findByIdAndRemove(req.params.id)
    .then((customer) => {
      if (!customer) {
        return res
          .status(404)
          .send({ message: 'customer not found with id ' + req.params.id });
      }
      res.send({ message: 'customer deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res
          .status(404)
          .send({ message: 'customer not found with id ' + req.params.id });
      }
      return res.status(500).send({
        message: 'Could not delete customer with id ' + req.params.id,
      });
    });
};

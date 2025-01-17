const express = require('express');

const router = express.Router();

router.use(express.json());

const employeeModel = require("../models/employeeData");

const jwt = require('jsonwebtoken');




// Authentication middleware
const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send('Invalid Token');
    }
  };
  
  const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access Denied');
    next();
  };









app.get('/api/employees', authenticate, async (req, res) => {
    const employees = await Employee.find();
    res.send(employees);
  });
  
  app.post('/api/employees', authenticate, authorizeAdmin, async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.send('Employee created');
  });
  
  app.put('/api/employees/:id', authenticate, authorizeAdmin, async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.send('Employee updated');
  });
  
  app.delete('/api/employees/:id', authenticate, authorizeAdmin, async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.send('Employee deleted');
  });
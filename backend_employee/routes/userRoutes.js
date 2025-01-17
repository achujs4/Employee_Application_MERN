
const express = require('express');

const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({extended:true}))

const jwt = require('jsonwebtoken')

const userModel = require('../models/userData')












app.post('/api/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword, role: req.body.role });
    await user.save();
    res.send('User registered');
  });
  
  app.post('/api/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).send('Invalid Credentials');
    }
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.send({ token });
  });

  

module.exports = router;
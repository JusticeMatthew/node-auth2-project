const express = require('express');
const router = express.Router();

const Users = require('./model');
const gatekeeper = require('../middleware/gatekeeper');

router.get('/', gatekeeper, async (_, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json('Server Error');
  }
});

module.exports = router;

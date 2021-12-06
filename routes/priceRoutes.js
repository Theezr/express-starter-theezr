const express = require('express');
const priceController = require('../controllers/priceController');

const router = express.Router();

router.route('/').get(priceController.dummy);

module.exports = router;

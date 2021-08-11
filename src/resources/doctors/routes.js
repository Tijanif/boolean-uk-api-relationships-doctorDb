const router = require('express').Router();

const { getAllDoctors } = require('./controller');

router.get('/', getAllDoctors);

module.exports = router;

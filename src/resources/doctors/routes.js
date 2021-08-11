const router = require('express').Router();

const { getAllDoctors, getADoctorById } = require('./controller');

router.get('/', getAllDoctors);

router.get('/:id', getADoctorById);

module.exports = router;

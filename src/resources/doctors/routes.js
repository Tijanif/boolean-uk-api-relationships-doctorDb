const router = require('express').Router();

const {
  getAllDoctors,
  getADoctorById,
  createADoctor,
} = require('./controller');

router.get('/', getAllDoctors);

router.get('/:id', getADoctorById);

router.post('/', createADoctor);

module.exports = router;

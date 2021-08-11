const router = require('express').Router();

const {
  getAllDoctors,
  getADoctorById,
  createADoctor,
  deleteADoctor,
} = require('./controller');

router.get('/', getAllDoctors);

router.get('/:id', getADoctorById);

router.post('/', createADoctor);
router.delete('/:id', deleteADoctor);

module.exports = router;

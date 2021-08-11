const { doctor, appointment } = require('../../../utilities/dbClient');

const getAllDoctors = async (req, res) => {
  const allDoctors = await doctor.findMany();
  res.json({ data: allDoctors });
};

const getADoctorById = async (req, res) => {
  const { id } = req.params;

  const foundDoctor = await doctor.findUnique({
    where: { id: parseInt(id) },
  });
  res.json({ data: foundDoctor });
};

module.exports = {
  getAllDoctors,
  getADoctorById,
};

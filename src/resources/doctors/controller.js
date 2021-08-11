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

const createADoctor = async (req, res) => {
  const doctorData = req.body;
  try {
    const createdDoctor = await doctor.create({ data: doctorData });

    res.json({ data: createdDoctor });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  getAllDoctors,
  getADoctorById,
  createADoctor,
};

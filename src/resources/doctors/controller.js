const { doctor, appointment } = require('../../../utilities/dbClient');

const getAllDoctors = async (req, res) => {
  const allDoctors = await doctor.findMany();
  res.json({ data: allDoctors });
};

module.exports = {
  getAllDoctors,
};

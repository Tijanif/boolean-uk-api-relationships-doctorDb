const { PrismaClient } = require('@prisma/client');

const dbSeedClient = new PrismaClient();

const seedDoctors = [
  {
    firstName: 'Sergio',
    lastName: 'Neves',
    specialty: "Making Tijani's life hard",
  },
  {
    firstName: 'Rico',
    lastName: 'Steven',
    specialty: 'Midfullness',
  },
  {
    firstName: 'Nathan',
    lastName: 'Previously New Guy',
    specialty: 'Dont know yeet',
  },
  {
    firstName: 'Bilaal',
    lastName: 'New New Guy',
    specialty: 'Dont know yeet',
  },
];

const seedAppointments = [
  {
    reason: 'broken leg recovery',
    date: '11 august 2021',
    practiceName: 'Some GP office',
  },
  {
    reason: 'constipation',
    date: '11 august 2021',
    practiceName: 'Some GP office',
  },
  {
    reason: 'ear infection',
    date: '11 august 2021',
    practiceName: 'Some GP office',
  },
  {
    reason: 'back pain',
    date: '11 august 2021',
    practiceName: 'Some GP office',
  },
];

const getRandomNumber = (array) => {
  const number = Math.floor(Math.random() * array.length);
  return array[number];
};

const seed = async () => {
  const arrayOfDoctorPromises = seedDoctors.map(async (doctor) => {
    return await dbSeedClient.doctor.create({
      data: doctor,
    });
  });

  const createdDoctors = await Promise.all(arrayOfDoctorPromises);

  const getDoctorsId = createdDoctors.map(({ id }) => id);

  const arrayOfAppointmentPromises = seedAppointments.map(
    async (appointment) => {
      return await dbSeedClient.appointment.create({
        data: {
          ...appointment,
          date: new Date(appointment.date).toISOString(),
          doctor: {
            connect: {
              id: parseInt(getRandomNumber(getDoctorsId)),
            },
          },
        },
      });
    }
  );

  const createdAppointments = await Promise.all(arrayOfAppointmentPromises);

  console.log('Doctors', createdDoctors, 'Appointments', createdAppointments);
};

seed()
  .catch((e) => console.error(e))
  .finally(async () => await dbClient.$disconnect());

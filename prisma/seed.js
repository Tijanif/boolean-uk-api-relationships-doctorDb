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

const seed = async () => {
  const arrayOfDoctorPromises = seedDoctors.map(async (doctor) => {
    return await dbSeedClient.doctor.create({
      data: doctor,
    });
  });

  const createdDoctors = await Promise.all(arrayOfDoctorPromises);

  console.log('Doctors', createdDoctors);
};

seed()
  .catch((e) => console.error(e))
  .finally(async () => await dbClient.$disconnect());

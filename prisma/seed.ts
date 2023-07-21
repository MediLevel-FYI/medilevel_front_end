import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const compensationData: Prisma.CompensationCreateInput[] = [
  {
    specialty: "Cardiology",
    yearsPostTraining: 5,
    baseSalary: 150000,
    annualBonus: 20000,
    isFullTime: "Full Time",
    hoursPerWeek: 30,
    city: "new york",
    state: "NY",
    hospital: "ABC Hospital",
    totalCompensation: 170000,
    vacationWeeksAnnually: 4,
    providerGender: "Male",
  },
  {
    specialty: "Orthopedics",
    yearsPostTraining: 8,
    baseSalary: 180000,
    annualBonus: 25000,
    isFullTime: "Full Time",
    hoursPerWeek: 30,
    city: "los angeles",
    state: "CA",
    hospital: "XYZ Medical Center",
    totalCompensation: 205000,
    vacationWeeksAnnually: 8,
    providerGender: "Female",
  },
  {
    specialty: "Pediatrics",
    yearsPostTraining: 3,
    baseSalary: 120000,
    annualBonus: 15000,
    isFullTime: "Part Time",
    hoursPerWeek: 30,
    city: "chicago",
    state: "IL",
    hospital: "123 Children's Hospital",
    totalCompensation: 135000,
    vacationWeeksAnnually: 3,
    providerGender: "Male",
  },
  {
    specialty: "Dermatology",
    yearsPostTraining: 10,
    baseSalary: 200000,
    annualBonus: 30000,
    isFullTime: "Full Time",
    hoursPerWeek: 30,
    city: "miami",
    state: "FL",
    hospital: "Sunshine Dermatology Clinic",
    totalCompensation: 230000,
    vacationWeeksAnnually: 4,
    providerGender: "Female",
  },
  {
    specialty: "Neurology",
    yearsPostTraining: 6,
    baseSalary: 160000,
    annualBonus: 22000,
    isFullTime: "Full Time",
    hoursPerWeek: 30,
    city: "san francisco",
    state: "CA",
    hospital: "Golden State Neurological Institute",
    totalCompensation: 182000,
    vacationWeeksAnnually: 2,
    providerGender: "Male",
  },
  {
    specialty: "Family Medicine",
    yearsPostTraining: 2,
    baseSalary: 100000,
    annualBonus: 10000,
    isFullTime: "Part Time",
    hoursPerWeek: 35,
    city: "Austin",
    state: "TX",
    hospital: "Healthy Family Clinic",
    totalCompensation: 101000,
    vacationWeeksAnnually: 7,
    providerGender: "Female",
  },
  {
    specialty: "Ophthalmology",
    yearsPostTraining: 7,
    baseSalary: 180000,
    annualBonus: 25000,
    isFullTime: "Full Time",
    hoursPerWeek: 30,
    city: "Boston",
    state: "MA",
    hospital: "Vision Care Center",
    totalCompensation: 205000,
    vacationWeeksAnnually: 7,
    providerGender: "Male",
  },
  {
    specialty: "Psychiatry",
    yearsPostTraining: 4,
    baseSalary: 140000,
    annualBonus: 18000,
    isFullTime: "Full Time",
    hoursPerWeek: 30,
    city: "seattle",
    state: "WA",
    hospital: "Mental Health Clinic",
    totalCompensation: 158000,
    vacationWeeksAnnually: 4,
    providerGender: "Female",
  },
  {
    specialty: "General Surgery",
    yearsPostTraining: 9,
    baseSalary: 190000,
    annualBonus: 28000,
    isFullTime: "Full Time",
    hoursPerWeek: 30,
    city: "Houston",
    state: "TX",
    hospital: "Surgical Center of Excellence",
    totalCompensation: 118000,
    vacationWeeksAnnually: 5,
    providerGender: "Male",
  },
  {
    specialty: "Obstetrics and Gynecology",
    yearsPostTraining: 5,
    baseSalary: 160000,
    annualBonus: 22000,
    isFullTime: "Part Time",
    hoursPerWeek: 30,
    city: "Denver",
    state: "CO",
    hospital: "Women's Health Associates",
    totalCompensation: 182000,
    vacationWeeksAnnually: 5,
    providerGender: "Female",
  },
]

async function main() {
  console.log('Start seeding ...')
  for (const c of compensationData) {
    const compensation = await prisma.compensation.create({
      data: c,
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

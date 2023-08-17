-- CreateTable
CREATE TABLE "Compensation" (
    "id" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "yearsPostTraining" INTEGER NOT NULL,
    "totalCompensation" INTEGER NOT NULL,
    "baseSalary" INTEGER,
    "annualBonus" INTEGER,
    "isFullTime" TEXT NOT NULL,
    "hoursPerWeek" INTEGER NOT NULL,
    "vacationWeeksAnnually" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "hospital" TEXT NOT NULL,
    "providerGender" TEXT NOT NULL,
    "signedNonCompete" BOOLEAN,
    "freeText" TEXT,

    CONSTRAINT "Compensation_pkey" PRIMARY KEY ("id")
);


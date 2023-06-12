"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Compensation } from "@/schemas/compensationSchema"

export const columns: ColumnDef<Compensation>[] = [
  {
    accessorKey: "specialty",
    header: "Specialty",
  },
  {
    accessorKey: "yearsPostTraining",
    header: "Years Post Training",
  },
  {
    accessorKey: "baseSalary",
    header: "Base Salary",
  },
  {
    accessorKey: "annualBonusAmount",
    header: "Annual Bonus",
  },
  {
    accessorKey: "isFullTime",
    header: "Full-Time | Part-Time",
  },
  {
    accessorKey: "hoursPerWeek",
    header: "Hours / Week",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "hospitalName",
    header: "Hospital",
  },
  {
    accessorKey: "providerGender",
    header: "Provider's Gender",
  },
]

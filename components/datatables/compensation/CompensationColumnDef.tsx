"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Compensation = {
  id: string
  specialty: string
  base_salary: number
  hours_per_week: number
  annual_bonus_amount: number
  city: string
  state: string
  hospital_name: string
  signed_non_compete: boolean
}

export const columns: ColumnDef<Compensation>[] = [
  {
    accessorKey: "specialty",
    header: "Specialty",
  },
  {
    accessorKey: "base_salary",
    header: "Salary",
  },
  {
    accessorKey: "hours_per_week",
    header: "Hours / Week",
  },
  {
    accessorKey: "annual_bonus_amount",
    header: "Annual Bonus",
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
    accessorKey: "hospital_name",
    header: "Hospital",
  },
  {
    accessorKey: "signed_non_compete",
    header: "Signed Non-Compete?",
  },
]

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
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("baseSalary"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount))
 
      return <div className="font-medium text-right">{formatted}</div>
    },
  },
  {
    accessorKey: "annualBonusAmount",
    header: "Annual Bonus",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("annualBonusAmount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount))
 
      return <div className="font-medium text-right">{formatted}</div>
    },
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
  // {
  //   accessorKey: "providerGender",
  //   header: "Provider's Gender",
  // },
]

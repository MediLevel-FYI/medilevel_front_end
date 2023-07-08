"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header"
import { Compensation } from "@/schemas/compensationSchema"

export const columns: ColumnDef<Compensation>[] = [
  {
    accessorKey: "specialty",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Specialty" />
    ),
  },
  {
    accessorKey: "yearsPostTraining",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Years Post Training" />
    ),
    cell: ({ row }) => {
      const amount: number = row.getValue("yearsPostTraining")
      const formatted = Math.round(amount)
 
      return <div className="text-left">{formatted}</div>
    }, 
  },
  {
    accessorKey: "baseSalary",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Base Salary" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("baseSalary"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount))
 
      return <div className="text-left">{formatted}</div>
    },
  },
  {
    accessorKey: "annualBonusAmount",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Annual Bonus" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("annualBonusAmount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount))
 
      return <div className="text-left">{formatted}</div>
    },
  },
  {
    accessorKey: "isFullTime",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Full / Part Time" />
    ),
  },
  {
    accessorKey: "hoursPerWeek",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Hours / Week" />
    ),
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="City" />
    ),
  },
  {
    accessorKey: "state",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="State" />
    ),
  },
  {
    accessorKey: "hospitalName",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Hospital" />
    ),
  },
  // {
  //   accessorKey: "providerGender",
  //       header: ({ column }) => (
      //<DataTableColumnHeader className="font-bold text-white" column={column} title="Provider's Gender" />
      //),
  // },
]

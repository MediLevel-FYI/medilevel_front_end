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
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Years Experience" />
    ),
    cell: ({ row }) => {
      const amount: number = row.getValue("yearsPostTraining")
      const formattedYear = Math.round(amount)

      const getYearRange = (year: number): string => {
        const yearMap = new Map<number, string>([
          [3, '0-3'],
          [6, '4-6'],
          [10, '7-10'],
        ])

        for (const [rangeStart, range] of yearMap) {
          if (year <= rangeStart) {
            return range
          }
        }
        return '11+'
      }

      const yearRange = getYearRange(formattedYear)

      return <div className="text-left">{yearRange}</div>
    },
  },
  {
    accessorKey: "totalCompensation",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Total Comp" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalCompensation"))
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
    accessorKey: "baseSalary",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Yearly Base" />
    ),
    cell: ({ row }) => {
      if (!row.getValue("baseSalary")) {
        return <div className="text-left"></div>
      }
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
    accessorKey: "annualBonus",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Yearly Bonus" />
    ),
    cell: ({ row }) => {
      if (!row.getValue("annualBonus")) {
        return <div className="text-left"></div>
      }
      const amount = parseFloat(row.getValue("annualBonus"))
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
      <DataTableColumnHeader className="font-bold text-white" column={column} title="FT/PT" />
    ),
  },
  {
    accessorKey: "hoursPerWeek",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Weekly Hours" />
    ),
  },
  {
    accessorKey: "vacationWeeksAnnually",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Weeks Vacation" />
    ),
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="City" />
    ),
    cell: ({ row }) => {
      const lowerCaseCity: string = row.getValue("city")
      const titleCaseCity = (city: string) => {
        const words = city.split(' ')
        const titleCasedWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        })

        const titleCasedCity = titleCasedWords.join(' ')

        return titleCasedCity
      }

      const city = titleCaseCity(lowerCaseCity)

      return <div className="text-left">{city}</div>
    },
  },
  {
    accessorKey: "state",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="State" />
    ),
  },
  {
    accessorKey: "hospital",
    header: ({ column }) => (
      <DataTableColumnHeader className="font-bold text-white" column={column} title="Hospital" />
    ),
  },
]

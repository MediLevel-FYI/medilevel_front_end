export type Compensation = {
  id: string
  specialty: string
  yearsPostTraining: number
  totalCompensation: number
  baseSalary?: number
  annualBonus?: number
  isFullTime: string
  hoursPerWeek: number
  vacationWeeksAnnually: number
  city: string
  state: string
  hospital: string
  providerGender: string
}

export type CompensationSubmission = {
  specialty: string
  yearsPostTraining: number
  totalCompensation: number
  baseSalary?: number | null
  annualBonus?: number | null
  isFullTime: string
  hoursPerWeek: number
  vacationWeeksAnnually: number
  city: string
  state: string
  hospital: string
  providerGender: string
}

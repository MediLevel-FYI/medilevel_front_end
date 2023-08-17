export type Compensation = {
  id: string
  specialty: string
  yearsPostTraining: number
  totalCompensation: number
  baseSalary: number | null
  annualBonus: number | null
  isFullTime: string
  hoursPerWeek: number
  vacationWeeksAnnually: number
  city: string
  state: string
  hospital: string
  signedNonCompete: boolean
  providerGender: string
  freeText?: string | null
}

export type CompensationSubmission = Omit<Compensation, 'id'>

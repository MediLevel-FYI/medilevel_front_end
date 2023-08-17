export type Compensation = {
  id: string
  specialty: string
  yearsPostTraining: number | string
  totalCompensation: number | string
  baseSalary: number | string | null
  annualBonus: number | string | null
  isFullTime: string
  hoursPerWeek: number | string
  vacationWeeksAnnually: number | string
  city: string
  state: string
  hospital: string
  signedNonCompete: boolean
  providerGender: string
  freeText?: string
}

export type CompensationSubmission = Omit<Compensation, 'id'>

import { Compensation } from '@/schemas/compensationSchema'

type NewCompensationSubmission = Partial<Omit<Compensation, 'id'>>

export const postCompensation = async (compensationData: NewCompensationSubmission) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/compensations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(compensationData),
      next: {
        tags: ["compensation"]
      }
    });

    const data = await res.json()
    if (res.ok) {
      return data.message
    } else {
      console.error(data.message)
      throw data.message
    }
  } catch (error) {
    console.error(error)
    throw 'An error occurred while submitting compensation. Please try again.'
  }
}

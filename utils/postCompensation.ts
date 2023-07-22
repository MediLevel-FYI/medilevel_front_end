import { Compensation } from '@/schemas/compensationSchema'

type NewCompensationSubmission = Partial<Omit<Compensation, 'id'>>

export const postCompensation = async (compensationData: NewCompensationSubmission): Promise<void> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/compensations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ compensationData }),
      next: {
        tags: ["compensation"]
      }
    });
    console.log('post response', res)
  } catch (error) {
    console.error(error)
  }
}

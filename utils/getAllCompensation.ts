import { Compensation } from '@/schemas/compensationSchema'

export const getAllCompensation = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/compensations`, {
      method: "GET",
      next: {
        tags: ["compensation"]
      }
    });
    const data = await res.json()
    const compensations: Compensation[] = data.compensations

    return compensations;

  } catch (error) {
    console.error(error)
  }
}

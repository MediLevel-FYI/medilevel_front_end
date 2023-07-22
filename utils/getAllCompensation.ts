import { Compensation } from '@/schemas/compensationSchema'

export const getAllCompensation = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/compensations`, {
      next: {
        tags: ["compensation"]
      }
    });
    const data = await res.json()
    const compensation: Compensation[] = data.compensations

    return compensation;

  } catch (error) {
    console.error(error)
  }
}

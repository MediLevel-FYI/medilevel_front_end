import prisma from '@/lib/prisma'
import { Compensation } from '@/schemas/compensationSchema'

export default async function prismaGetAllCompensation() {
  const compensations: Compensation[] = await prisma.compensation.findMany()
  return compensations
}

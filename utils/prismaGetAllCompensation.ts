import prisma from '@/lib/prisma'
import { Compensation } from '@/schemas/compensationSchema'
import { NextResponse } from 'next/server'


export default async function prismaGetAllCompensation() {
  const compensations: Compensation[] = await prisma.compensation.findMany()
  console.log(compensations)
  console.log(typeof compensations)
  return compensations
}

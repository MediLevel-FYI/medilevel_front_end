import prisma from '@/lib/prisma'
import { Compensation } from '@/schemas/compensationSchema'
import { NextResponse } from "next/server"
import { revalidateTag } from 'next/cache'

export async function GET() {
  const compensations: Compensation[] = await prisma.compensation.findMany()
  return NextResponse.json({ compensations })
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const result = await prisma.compensation.create({
      data: data.compensationData
    })
    revalidateTag('compensations')
    return NextResponse.json({ body: result }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ body: error }, { status: 500 })
  }

}

import prisma from '@/lib/prisma'
import { Compensation } from '@/schemas/compensationSchema'
import { NextResponse } from "next/server"

export async function GET() {
  const compensations: Compensation[] = await prisma.compensation.findMany()
  return NextResponse.json({ compensations })
}

export async function POST(req: Request) {
  const data = await req.json()
  const result = await prisma.compensation.create({
    data: data
  })

  return NextResponse.json({ body: result }, { status: 201 })
}

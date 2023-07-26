import prisma from '@/lib/prisma'
import { Compensation } from '@/schemas/compensationSchema'
import { NextResponse } from "next/server"
import { revalidateTag } from 'next/cache'

export async function GET() {
  try {
    const compensations: Compensation[] = await prisma.compensation.findMany()

    return NextResponse.json(
      {
        compensations: compensations
      },
      {
        status: 200
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: error
      },
      {
        status: 500
      }
    )
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const result = await prisma.compensation.create({
      data: data.compensationData
    })

    revalidateTag('compensations')

    return NextResponse.json(
      {
        message: "Compensation submitted successfully!"
      },
      {
        status: 201
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: error
      },
      {
        status: 500
      }
    )
  }
}

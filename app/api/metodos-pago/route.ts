import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const metodos = await prisma.paymentMethod.findMany();
  return NextResponse.json(metodos);
}

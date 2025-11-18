import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const ventas = await prisma.sale.findMany({
    include: {
      client: true,
      car: true,
      paymentMethod: true,
    },
  });
  return NextResponse.json(ventas);
}

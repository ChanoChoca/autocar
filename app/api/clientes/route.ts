import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const clientes = await prisma.client.findMany();
  return NextResponse.json(clientes);
}

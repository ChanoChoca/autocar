import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search")?.trim() || "";

  if (!search) {
    return NextResponse.json(await prisma.car.findMany());
  }

  const terms = search.split(/\s+/).filter(Boolean);

  const buildCondition = (term: string) => {
    const textMatch = [
      { brand: { contains: term } },
      { model: { contains: term } },
    ];

    if (!/^\d+$/.test(term)) return { OR: textMatch };

    const num = Number(term);

    if (term.length >= 4) {
      return { OR: [...textMatch, { year: num }] };
    }

    const multiplier = 10 ** (4 - term.length);
    const min = num * multiplier;
    const max = min + multiplier - 1;

    return { OR: [...textMatch, { year: { gte: min, lte: max } }] };
  };

  const andConditions = terms.map(buildCondition);

  const cars = await prisma.car.findMany({
    where: {
      AND: andConditions,
      sales: { none: {} },
    },
    take: 20,
  });

  return NextResponse.json(cars);
}

import prisma from "./prisma";

export async function getCarFilters(brands?: string[]) {
  const where: any = { sales: { none: {} } };
  if (brands && brands.length) where.brand = { in: brands };

  const rows = await prisma.car.findMany({
    where,
    select: {
      brand: true,
      model: true,
      type: true,
      transmission: true,
    },
    orderBy: [
      { brand: "asc" },
      { model: "asc" },
      { type: "asc" },
      { transmission: "asc" },
    ],
  });

  const brandsSet = new Set<string>();
  const typesSet = new Set<string>();
  const transmissionsSet = new Set<string>();
  const modelsMap = new Map<string, { brand: string; model: string }>();

  rows.forEach((r) => {
    brandsSet.add(r.brand);
    typesSet.add(r.type);
    transmissionsSet.add(r.transmission);

    const key = `${r.brand}__${r.model}`;
    if (!modelsMap.has(key))
      modelsMap.set(key, { brand: r.brand, model: r.model });
  });

  return {
    brands: Array.from(brandsSet).sort(),
    types: Array.from(typesSet).sort(),
    transmissions: Array.from(transmissionsSet).sort(),
    models: Array.from(modelsMap.values()),
  };
}

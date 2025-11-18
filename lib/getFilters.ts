import prisma from "./prisma";

export async function getCarFilters(brands?: string[]) {
  const brandRows = await prisma.car.findMany({
    select: { brand: true },
    where: { sales: { none: {} } },
    distinct: ["brand"],
    orderBy: { brand: "asc" },
  });

  const modelRows = await prisma.car.findMany({
    select: { model: true, brand: true },
    where: {
      sales: { none: {} },
      ...(brands && brands.length ? { brand: { in: brands } } : {}),
    },
    orderBy: { model: "asc" },
  });

  const types = await prisma.car.findMany({
    select: { type: true },
    where: { sales: { none: {} } },
    distinct: ["type"],
    orderBy: { type: "asc" },
  });

  const transmissions = await prisma.car.findMany({
    select: { transmission: true },
    where: { sales: { none: {} } },
    distinct: ["transmission"],
    orderBy: { transmission: "asc" },
  });

  const uniqueModelsMap = new Map<string, { model: string; brand: string }>();
  modelRows.forEach((r) => {
    const key = `${r.model}__${r.brand}`;
    if (!uniqueModelsMap.has(key))
      uniqueModelsMap.set(key, { model: r.model, brand: r.brand });
  });

  return {
    brands: brandRows.map((b) => b.brand),
    models: Array.from(uniqueModelsMap.values()),
    types: types.map((t) => t.type),
    transmissions: transmissions.map((t) => t.transmission),
  };
}

export async function fetchCarsList({
  page = 1,
  min,
  max,
  type,
  brands,
  models,
  year,
  transmission,
  pageSize = 100,
}: {
  page?: number;
  min?: number;
  max?: number;
  type?: string;
  brands?: string[];
  models?: string[];
  year?: number;
  transmission?: string;
  pageSize?: number;
}) {
  const skip = (page - 1) * pageSize;

  const where: any = {
    sales: { none: {} },
  };

  if (type) where.type = type;
  if (min !== undefined || max !== undefined) {
    where.price = {};
    if (min !== undefined) where.price.gte = min;
    if (max !== undefined) where.price.lte = max;
  }
  if (brands?.length) where.brand = { in: brands };
  if (models?.length) where.model = { in: models };
  if (year) where.year = year;
  if (transmission) where.transmission = transmission;

  const cars = await prisma.car.findMany({
    where,
    skip,
    take: pageSize,
    orderBy: { id: "desc" },
    include: { images: true },
  });

  return cars;
}

export async function fetchCarsCount({
  min,
  max,
  type,
  brands,
  models,
  year,
  transmission,
}: {
  min?: number;
  max?: number;
  type?: string;
  brands?: string[];
  models?: string[];
  year?: number;
  transmission?: string;
}) {
  const where: any = {
    sales: { none: {} },
  };

  if (type) where.type = type;
  if (min !== undefined || max !== undefined) {
    where.price = {};
    if (min !== undefined) where.price.gte = min;
    if (max !== undefined) where.price.lte = max;
  }
  if (brands?.length) where.brand = { in: brands };
  if (models?.length) where.model = { in: models };
  if (year) where.year = year;
  if (transmission) where.transmission = transmission;

  const total = await prisma.car.count({ where });
  return total;
}

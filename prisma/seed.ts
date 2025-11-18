import { Prisma, PrismaClient } from "@/app/generated/prisma/client";
import car from "../data/car.json";
import carImages from "../data/carImages.json";
import client from "../data/client.json";
import sale from "../data/sale.json";
import paymentMethod from "../data/paymentMethod.json";

const prisma = new PrismaClient();

async function main() {
  await prisma.paymentMethod.createMany({
    data: paymentMethod,
  });

  await prisma.car.createMany({
    data: car as Prisma.CarCreateManyInput[],
  });

  const flatImages = carImages.flatMap((car) =>
    car.images.map((img) => ({
      url: img.url,
      carId: car.carId,
    }))
  );
  await prisma.carImage.createMany({ data: flatImages });

  await prisma.client.createMany({
    data: client,
  });

  await prisma.sale.createMany({
    data: sale,
  });
}

main();

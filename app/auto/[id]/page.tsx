import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Auto from "./auto";
import { CarWithImages } from "@/types/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const car = await prisma.car.findUnique({
    where: { id: Number(id) },
    include: { images: true },
  });

  if (!car) return notFound();

  const plainCar: CarWithImages = {
    ...car,
    price: Number(car.price),
  };

  return <Auto car={plainCar} id={id} />;
}

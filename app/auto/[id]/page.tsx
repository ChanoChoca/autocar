import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Auto from "./auto";
import { Car } from "@/app/generated/prisma/client";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const car = await prisma.car.findUnique({
    where: { id: Number(id) },
    include: { images: true },
  });

  if (!car) return notFound();

  const plainCar: Car = {
    ...car,
    price: Number(car.price),
  };

  return <Auto car={plainCar} id={id} />;
}

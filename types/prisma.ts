import { Car, CarImage } from "@/app/generated/prisma/client";

export type CarWithImages = Car & {
  images: CarImage[];
};

import { CarWithImages } from "@/types/prisma";
import Link from "next/link";

export default function CarCard({ car }: { car: CarWithImages }) {
  const img = car.images?.[0]?.url ?? "/placeholder-car.jpg";

  return (
    <Link href={`/auto/${car.id}`}>
      <article className="border border-[#e7e9ee] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition p-0 bg-white">
        <div className="h-44 w-full overflow-hidden">
          <img
            src={img}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="py-4 px-4">
            <h3 className="font-semibold text-lg">
              {car.brand} {car.model}
            </h3>
            <p className="text-sm text-gray-500">
              {car.year} • {car.version} • {car.transmission}
            </p>
          </div>
          <hr className="text-[#e7e9ee]" />
          <div className="py-4 px-4">
            <p>Precio</p>
            <p className="font-bold text-xl">${car.price.toLocaleString()}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

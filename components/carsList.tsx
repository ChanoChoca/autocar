import { fetchCarsList } from "@/lib/fetchCars";
import CarCard from "./carCard";

export default async function CarsList({
  currentPage,
  min,
  max,
  type,
  brands,
  models,
  year,
  transmission,
}: {
  currentPage: number;
  min?: number;
  max?: number;
  type?: string;
  brands?: string[];
  models?: string[];
  year?: number;
  transmission?: string;
}) {
  const cars = await fetchCarsList({
    page: currentPage,
    min,
    max,
    type,
    brands,
    models,
    year,
    transmission,
    pageSize: 10,
  });

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((c) => (
        <CarCard key={c.id} car={c} />
      ))}
    </section>
  );
}

/* if (mode === "list") {
    return (
      <div className="w-full max-h-[500px] overflow-y-auto rounded-lg border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {cars.map((car) => (
            <li
              key={car.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">
                  {car.brand} {car.model}
                </span>
                <span className="text-xs text-gray-500">ID: {car.id}</span>
              </div>

              <span className="text-sm font-medium text-gray-700">
                {car.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  } */

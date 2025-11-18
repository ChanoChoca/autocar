import { Suspense } from "react";
import Pagination from "./pagination";
import Search from "./search";
import { fetchCars } from "@/lib/fetchCars";
import CarsList from "./carsList";
import { getCarFilters } from "@/lib/getFilters";
import CheckboxGroup from "./checkboxSearch";
import Loading from "@/app/autos/loading";
import { SearchProvider } from "./searchProvicer";

export default async function CarsFilterBrowser({
  searchParams,
}: {
  searchParams: {
    page?: string;
    min?: string;
    max?: string;
    brands?: string;
    models?: string;
    year?: string;
    transmission?: string;
    type?: string;
  };
}) {
  const params = await searchParams;
  const min = Number(params.min) || undefined;
  const max = Number(params.max) || undefined;
  const type = params.type || undefined;
  const brands = params.brands?.split(",") || [];
  const models = params.models?.split(",") || [];
  const year = Number(params.year) || undefined;
  const transmission = params.transmission || undefined;
  const currentPage = Number(params.page) || 1;

  const {
    brands: availableBrands,
    models: availableModels,
    types: availableTypes,
    transmissions: availableTransmissions,
  } = await getCarFilters(brands);

  const { total } = await fetchCars({
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
  const totalPages = Math.ceil(total / 10);

  return (
    <SearchProvider>
      <div className="w-full flex flex-col lg:flex-row gap-5 px-5">
        <div className="bg-white p-5 rounded-xl h-fit lg:min-w-[454px]">
          <p className="font-semibold">Filtros</p>
          <div className="flex flex-col items-start justify-between gap-5 mt-5">
            <div className="space-y-2.5 w-full">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center group-open:font-bold">
                  Precio
                  <span className="transition-transform rotate-180 group-open:rotate-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0F0F0F"
                        d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <Search
                      param="min"
                      type="number"
                      placeholder="Precio mínimo"
                    />
                    <span className="text-gray-500">-</span>
                    <Search
                      param="max"
                      type="number"
                      placeholder="Precio máximo"
                    />
                  </div>
                </div>
              </details>
            </div>
            <div className="space-y-2.5 w-full">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center group-open:font-bold">
                  Tipo
                  <span className="transition-transform rotate-180 group-open:rotate-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0F0F0F"
                        d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="mt-3">
                  <Search
                    param="type"
                    placeholder="Tipo de auto"
                    options={availableTypes}
                  />
                </div>
              </details>
            </div>
            <div className="space-y-2.5 w-full">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center group-open:font-bold">
                  Marcas
                  <span className="transition-transform rotate-180 group-open:rotate-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0F0F0F"
                        d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="mt-3">
                  <CheckboxGroup param="brands" options={availableBrands} />
                </div>
              </details>
            </div>

            <div className="space-y-2.5 w-full">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center group-open:font-bold">
                  Modelos
                  <span className="transition-transform rotate-180 group-open:rotate-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0F0F0F"
                        d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="mt-3">
                  <CheckboxGroup
                    param="models"
                    options={availableModels.map((m) => ({
                      value: m.model,
                      brand: m.brand,
                    }))}
                  />
                </div>
              </details>
            </div>

            <div className="space-y-2.5 w-full">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center group-open:font-bold">
                  Año
                  <span className="transition-transform rotate-180 group-open:rotate-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0F0F0F"
                        d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="mt-3">
                  <Search
                    param="year"
                    type="number"
                    placeholder="Año del auto"
                  />
                </div>
              </details>
            </div>

            <div className="space-y-2.5 w-full">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center group-open:font-bold">
                  Transmisión
                  <span className="transition-transform rotate-180 group-open:rotate-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0F0F0F"
                        d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="mt-3">
                  <Search
                    param="transmission"
                    placeholder="Tipo de transmisión"
                    options={availableTransmissions}
                  />
                </div>
              </details>
            </div>
          </div>
        </div>
        {totalPages === 0 ? (
          <div className="w-full">
            <h2 className="font-bold text-5xl text-center mt-10">
              No se encontraron resultados
            </h2>
          </div>
        ) : (
          <div>
            <Suspense key={currentPage} fallback={<Loading />}>
              <CarsList
                currentPage={currentPage}
                min={min}
                max={max}
                type={type}
                brands={brands}
                models={models}
                year={year}
                transmission={transmission}
              />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          </div>
        )}
      </div>
    </SearchProvider>
  );
}

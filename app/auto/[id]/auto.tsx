"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CarWithImages } from "@/types/prisma";

export default function Auto({ car, id }: { car: CarWithImages; id: string }) {
  const [current, setCurrent] = useState(car.images?.[0]?.url);

  const carouselRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const lists = container.querySelectorAll("ul");

    gsap.to(lists, {
      xPercent: -100,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <main className="mt-[72px] bg-[#f9fafb]">
      <div className="container mx-auto pt-[10vh] pb-[15vh] px-5">
        <div className="pb-6 text-base text-gray-600">
          <Link href="/autos" className="text-gray-500">
            Autos
          </Link>
          <span className="mx-2">›</span>
          <Link
            href={`/autos?brands=${car.brand}&page=1`}
            className="text-gray-500"
          >
            {car.brand}
          </Link>
          <span className="mx-2">›</span>
          <Link
            href={`/autos?brands=${car.brand}&models=${car.model}&page=1`}
            className="text-gray-500"
          >
            {car.model}
          </Link>
          <span className="mx-2">›</span>
          <Link
            href={`/autos?brands=${car.brand}&models=${car.model}&year=${car.year}&page=1`}
            className="text-gray-500"
          >
            {car.year}
          </Link>
          <span className="mx-2">›</span>
          <span className="font-semibold text-gray-800">
            {car.brand} {car.model}
          </span>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-6 justify-center">
          <div className="2xl:w-3/5 space-y-10">
            <div className="flex flex-col gap-4">
              <div className="w-full">
                <img
                  src={current}
                  alt=""
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {car.images?.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrent(img.url)}
                    className={`border-2 rounded w-20 h-20 overflow-hidden min-w-28 ${
                      current === img.url ? "border-black" : "border-[#e7e9ee]"
                    }`}
                  >
                    <img
                      src={img.url}
                      className="object-cover w-full h-full"
                      alt="thumb"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold text-xl mb-5">Información básica</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="border-b-2 pb-2 border-[#e7e9ee]">
                  <p>Ciudad</p>
                  <p className="font-semibold">Junín</p>
                </div>
                <div className="border-b-2 pb-2 border-[#e7e9ee]">
                  <p>Sucursal</p>
                  <p className="font-semibold">La mejor</p>
                </div>
                <div className="border-b-2 pb-2 border-[#e7e9ee]">
                  <p>Stock ID</p>
                  <p className="font-semibold">{id}</p>
                </div>
                <div className="border-b-2 pb-2 border-[#e7e9ee]">
                  <p>Estacionado en</p>
                  <p className="font-semibold">Vitrina</p>
                </div>
              </div>
            </div>

            <div className="space-y-7">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-800">
                  General
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
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Caballos de Fuerza</p>
                      <p className="font-semibold">{car.horsepower}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Número de velocidades</p>
                      <p className="font-semibold">{car.gears}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Aceleración estimada 0-100 km/h</p>
                      <p className="font-semibold">{car.acceleration} s</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Tipo de Combustible</p>
                      <p className="font-semibold">{car.fuelType}</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Cilindros</p>
                      <p className="font-semibold">{car.cylinders}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Litros</p>
                      <p className="font-semibold">{car.liters}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Peso bruto (kg)</p>
                      <p className="font-semibold">{car.grossWeight}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Tipo de motor</p>
                      <p className="font-semibold">{car.engineType}</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-800">
                  Exterior
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
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Diámetro de Rin</p>
                      <p className="font-semibold">{car.rimDiameter}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Tipo de Rin</p>
                      <p className="font-semibold">{car.rimType}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Tipo de bulbo luz baja</p>
                      <p className="font-semibold">{car.lowBeamBulb}</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Número de Puertas</p>
                      <p className="font-semibold">{car.doors}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Tipo de Carrocería</p>
                      <p className="font-semibold">{car.type}</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-800">
                  Equipamiento y confort
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
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Aire acondicionado</p>
                      <p className="font-semibold">
                        {car.airConditioning ? "Sí" : "No"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Control de Crucero</p>
                      <p className="font-semibold">
                        {car.cruiseControl ? "Sí" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-800">
                  Seguridad
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

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Cantidad de discos de freno</p>
                      <p className="font-semibold">{car.brakeDiscs}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Asistencia de frenado</p>
                      <p className="font-semibold">
                        {car.brakeAssist ? "Sí" : "No"}
                      </p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Bolsas de Aire Frontales</p>
                      <p className="font-semibold">
                        {car.frontAirbags ? "Sí" : "No"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Frenos ABS</p>
                      <p className="font-semibold">
                        {car.absBrakes ? "Sí" : "No"}
                      </p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Número total de Airbags</p>
                      <p className="font-semibold">{car.totalAirbags}</p>
                    </div>
                    <div className="border-b-2 pb-2.5 pt-2 border-[#e7e9ee]">
                      <p>Bolsa de Aire en Rodillas</p>
                      <p className="font-semibold">
                        {car.kneeAirbag ? "Sí" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-800">
                  Interior
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
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Número de Pasajeros</p>
                      <p className="font-semibold">{car.passengers}</p>
                    </div>
                  </div>

                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Material de Asientos</p>
                      <p className="font-semibold">{car.seatMaterial}</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-800">
                  Entretenimiento
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
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Bluetooth</p>
                      <p className="font-semibold">
                        {car.bluetooth ? "Sí" : "No"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="border-b-2 pb-2.5 border-[#e7e9ee]">
                      <p>Radio</p>
                      <p className="font-semibold">{car.radio}</p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
          <div className="2xl:w-2/5 flex flex-col gap-5">
            <div className="border border-[#e7e9ee] rounded-xl p-4 bg-white flex flex-col gap-3 h-fit">
              <h1 className="text-2xl font-bold">
                {car.brand} {car.model} {car.version} {car.year}
              </h1>
              <hr className="text-[#e7e9ee]" />
              <div>
                <p>Precio</p>
                <p className="font-bold text-xl">
                  ${car.price.toLocaleString()}
                </p>
              </div>
              <hr className="text-[#e7e9ee]" />
              <div>
                <p>Año</p>
                <p className="font-semibold">{car.year}</p>
              </div>
              <hr className="text-[#e7e9ee]" />
              <div>
                <p>Versión</p>
                <p className="font-semibold">{car.version}</p>
              </div>
              <hr className="text-[#e7e9ee]" />
              <div>
                <p>Transimisión</p>
                <p className="font-semibold">{car.transmission}</p>
              </div>
              <hr className="text-[#e7e9ee]" />
              <button className="bg-black text-white rounded px-3 py-2 cursor-pointer">
                Reservar visita
              </button>
            </div>
            <div className="border border-[#e7e9ee] rounded-xl p-4 bg-white flex flex-col gap-3 h-fit">
              <div className="flex gap-2.5 sm:gap-5 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#048b4a"
                      d="M3 22h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4V3a1 1 0 0 0-2 0v2H9V3a1 1 0 0 0-2 0v2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1ZM4 7h16v3H4Zm0 5h16v8H4Z"
                    />
                  </svg>
                </div>
                <p>Política de devolución: 7 días o 300 km</p>
              </div>
              <hr className="text-[#e7e9ee]" />
              <div className="flex gap-2.5 sm:gap-5 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#048b4a"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.632 7.631c-.396-.396-.594-.594-.669-.822a1 1 0 0 1 0-.618c.075-.228.273-.426.669-.822L18.47 2.53a6 6 0 0 0-8.3 6.895c.12.49.18.734.169.888a.849.849 0 0 1-.11.392c-.071.138-.208.274-.481.547L3.5 17.5a2.121 2.121 0 1 0 3 3l6.248-6.248c.273-.273.41-.41.547-.48a.85.85 0 0 1 .392-.11c.154-.011.399.049.888.168a6 6 0 0 0 6.895-8.3L18.632 8.37c-.396.396-.594.594-.823.668a1 1 0 0 1-.618 0c-.228-.074-.426-.272-.822-.668l-.737-.738Z"
                    />
                  </svg>
                </div>
                <p>Auto inspeccionado legal y mecánicamente</p>
              </div>
              <hr className="text-[#e7e9ee]" />
              <div className="flex gap-2.5 sm:gap-5 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#048b4a"
                      d="M7.97 12.53a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5.53 7.97a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM5 7.75a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5ZM4.47 7.97a.75.75 0 0 0 1.06 1.06L4.47 7.97Zm4.56-2.44a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm7 5.94a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.44 4.56a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm.53.22a.75.75 0 0 0 0-1.5v1.5Zm-14-1.5a.75.75 0 0 0 0 1.5v-1.5Zm14.53 1.28a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-4.56 2.44a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-5.94-7-3.5-3.5-1.06 1.06 3.5 3.5 1.06-1.06ZM5 9.25h14v-1.5H5v1.5Zm.53-.22 3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06Zm9.44 3.5 3.5 3.5 1.06-1.06-3.5-3.5-1.06 1.06ZM19 14.75H5v1.5h14v-1.5Zm-.53.22-3.5 3.5 1.06 1.06 3.5-3.5-1.06-1.06Z"
                    />
                  </svg>
                </div>
                <p>Bono extra al entregar tu auto actual</p>
              </div>
              <hr className="text-[#e7e9ee]" />
              <div className="flex gap-2.5 sm:gap-5 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#048b4a"
                      strokeLinecap="round"
                      d="M17.757 7.193a7.5 7.5 0 0 0-13.108 6.303M19.3 10.274a7.5 7.5 0 0 1-13.186 6.375"
                    />
                    <path
                      stroke="#048b4a"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.125 5.5v2h-2M7.875 16.5h-2v2"
                    />
                    <path stroke="#048b4a" strokeLinecap="round" d="M12 8v8" />
                    <path
                      stroke="#048b4a"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.81 10.152c-.12-.53-.803-1.12-1.804-1.12-1 0-1.77.65-1.77 1.47 0 1.864 3.711.906 3.711 3.07 0 .781-.94 1.444-1.94 1.444s-1.694-.615-1.899-1.274"
                    />
                  </svg>
                </div>
                <p>Pago en cuotas: con los aliados más grandes de la región</p>
              </div>
              <hr className="text-[#e7e9ee]" />
              <div className="flex gap-2.5 sm:gap-5 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#048b4a"
                      fillRule="evenodd"
                      d="M12.447 1.106a1 1 0 0 0-.894 0l-8 4A1 1 0 0 0 3 6v6c0 2.662.86 4.891 2.403 6.716 1.526 1.806 3.682 3.172 6.218 4.21a1 1 0 0 0 .758 0c2.536-1.038 4.692-2.404 6.218-4.21C20.14 16.891 21 14.662 21 12V6a1 1 0 0 0-.553-.894l-8-4ZM5 12V6.618l7-3.5 7 3.5V12c0 2.193-.695 3.963-1.93 5.425-1.184 1.4-2.898 2.555-5.07 3.49-2.172-.935-3.886-2.09-5.07-3.49C5.695 15.963 5 14.193 5 12Zm11.757-2.347a1 1 0 0 0-1.514-1.306l-4.48 5.193L8.7 11.517a1 1 0 0 0-1.4 1.428l2.823 2.769a1 1 0 0 0 1.458-.06l5.176-6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>Transacción segura, sin trámites engorrosos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section ref={carouselRef} className="pb-[15vh] overflow-x-hidden">
        <div
          className="flex select-none"
          style={{
            maskImage:
              "linear-gradient(90deg,transparent,#000 30%,#000 70%,transparent)",
          }}
        >
          <ul className="flex shrink-0 justify-around min-w-full">
            <li>
              <div className="flex flex-row items-center text-[90px] md:text-[180px] leading-[105%] uppercase">
                <span>Velocidad</span>
                <span
                  className="inline-block w-3 md:w-4 h-3 md:h-4 bg-[#d40001] rounded-full text-[0px] mx-4 md:mx-[34px]"
                  aria-hidden="true"
                ></span>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center text-[90px] md:text-[180px] leading-[105%] uppercase">
                <span>Estilo</span>
                <span
                  className="inline-block w-3 md:w-4 h-3 md:h-4 bg-[#d40001] rounded-full text-[0px] mx-4 md:mx-[34px]"
                  aria-hidden="true"
                ></span>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center text-[90px] md:text-[180px] leading-[105%] uppercase">
                <span>Seguridad</span>
                <span
                  className="inline-block w-3 md:w-4 h-3 md:h-4 bg-[#d40001] rounded-full text-[0px] mx-4 md:mx-[34px]"
                  aria-hidden="true"
                ></span>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center text-[90px] md:text-[180px] leading-[105%] uppercase">
                <span>Confiable</span>
                <span
                  className="inline-block w-3 md:w-4 h-3 md:h-4 bg-[#d40001] rounded-full text-[0px] mx-4 md:mx-[34px]"
                  aria-hidden="true"
                ></span>
              </div>
            </li>
          </ul>
          <ul
            className="flex shrink-0 justify-around min-w-full"
            aria-hidden="true"
          >
            <li>
              <div className="flex flex-row items-center text-[90px] md:text-[180px] leading-[105%] uppercase">
                <span>Velocidad</span>
                <span
                  className="inline-block w-3 md:w-4 h-3 md:h-4 bg-[#d40001] rounded-full text-[0px] mx-4 md:mx-[34px]"
                  aria-hidden="true"
                ></span>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center text-[90px] md:text-[180px] leading-[105%] uppercase">
                <span>Estilo</span>
                <span
                  className="inline-block w-3 md:w-4 h-3 md:h-4 bg-[#d40001] rounded-full text-[0px] mx-4 md:mx-[34px]"
                  aria-hidden="true"
                ></span>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center text-[90px] md:text-[180px] leading-[105%] uppercase">
                <span>Seguridad</span>
                <span
                  className="inline-block w-3 md:w-4 h-3 md:h-4 bg-[#d40001] rounded-full text-[0px] mx-4 md:mx-[34px]"
                  aria-hidden="true"
                ></span>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center text-[90px] md:text-[180px] leading-[105%] uppercase">
                <span>Confiable</span>
                <span
                  className="inline-block w-3 md:w-4 h-3 md:h-4 bg-[#d40001] rounded-full text-[0px] mx-4 md:mx-[34px]"
                  aria-hidden="true"
                ></span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

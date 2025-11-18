"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = heroRef.current;
    if (!container) return;

    const headings = container.querySelectorAll("h2");

    const split = new SplitText(headings, { type: "lines" });
    const lines = split.lines;

    gsap.set(lines, { yPercent: 100 });

    gsap.to(lines, {
      yPercent: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

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
    <main className="bg-[#f9fafb]">
      <section
        ref={heroRef}
        className="w-screen h-dvh relative text-white overflow-hidden text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
      >
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-1/2 w-full h-full object-cover brightness-50"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[40%]
                  bg-linear-to-t from-black/80 to-transparent"
        />
        <h2 className="absolute top-[30%] left-1/2 -translate-1/2 whitespace-nowrap font-extrabold overflow-hidden">
          Autos en Venta
        </h2>
        <h2 className="absolute top-[50%] left-1/2 -translate-1/2 whitespace-nowrap font-extrabold overflow-hidden">
          Que se Adaptan a Tu Vida
        </h2>
        <p className="absolute top-[70%] left-1/2 -translate-1/2 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold whitespace-nowrap">
          Compra de automóviles en línea diseñada para ti.
        </p>
      </section>

      <section className="w-screen relative -translate-y-10">
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 font-bold text-xl sm:text-2xl md:text-3xl">
            <Link
              href="/autos?type=Sedán"
              className="px-4 py-2 bg-white rounded flex flex-col items-center justify-center shadow-sm"
            >
              Sedán
              <img src="/images/types/sedan.png" alt="" />
            </Link>
            <Link
              href="/autos?type=Camioneta"
              className="px-4 py-2 bg-white rounded flex flex-col items-center justify-center shadow-sm"
            >
              Camioneta
              <img src="/images/types/truck.png" alt="" />
            </Link>
            <Link
              href="/autos?type=SUV"
              className="px-4 py-2 bg-white rounded flex flex-col items-center justify-center shadow-sm"
            >
              SUV / Crossover
              <img src="/images/types/suv-crossover.png" alt="" />
            </Link>
            <Link
              href="/autos?type=Cupé"
              className="px-4 py-2 bg-white rounded flex flex-col items-center justify-center shadow-sm"
            >
              Cupé
              <img src="/images/types/coupe.png" alt="" />
            </Link>
            <Link
              href="/autos?type=Hatchback"
              className="px-4 py-2 bg-white rounded flex flex-col items-center justify-center shadow-sm"
            >
              Hatchback
              <img src="/images/types/hatchback.png" alt="" />
            </Link>
            <Link
              href="/autos?type=VAN"
              className="px-4 py-2 bg-white rounded flex flex-col items-center justify-center shadow-sm"
            >
              Van / Minivan
              <img src="/images/types/van-minivan.png" alt="" />
            </Link>
            <Link
              href="/autos?type=Convertible"
              className="px-4 py-2 bg-white rounded flex flex-col items-center justify-center shadow-sm"
            >
              Convertible
              <img src="/images/types/convertible.png" alt="" />
            </Link>
            <Link
              href="/autos?type=Rural"
              className="px-4 py-2 bg-white rounded flex flex-col items-center justify-center shadow-sm"
            >
              Rural
              <img src="/images/types/wagon.png" alt="" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 pt-[20vh] pb-[15vh]">
        <h2 className="text-5xl font-bold">¿Por qué elegirnos?</h2>
        <div className="bg-white flex flex-col lg:flex-row gap-5 lg:justify-between lg:items-center p-5 sm:p-7.5 lg:p-10 rounded mt-10 shadow-sm sm:text-xl md:text-2xl">
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M6.78 6.773A1 1 0 0 1 7.754 6h8.492a1 1 0 0 1 .974.773L17.74 9H6.26l.52-2.227ZM2 11h1c-.628.836-1 1.874-1 3v1c0 1.306.835 2.418 2 2.83V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h10v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.17A3.001 3.001 0 0 0 22 15v-1a4.978 4.978 0 0 0-1-3h1a1 1 0 1 0 0-2h-1a1 1 0 0 0-.995.904l-.031-.131-.806-3.455A3 3 0 0 0 16.246 4H7.754a3 3 0 0 0-2.922 2.318l-.806 3.455-.03.131A1 1 0 0 0 3 9H2a1 1 0 0 0 0 2Zm5 0a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3H7Zm-1 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl pt-2.5">
              La colección más grande de Argentina
            </h3>
            <p>de autos nuevos y usados</p>
          </div>
          <div>
            <div className="flex items-center justify-start gap-2.5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                  version="1.0"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#000"
                    d="M62.799 23.737a3.941 3.941 0 0 0-3.139-2.642l-16.969-2.593-7.622-16.237a3.938 3.938 0 0 0-7.13 0l-7.623 16.238-16.969 2.593a3.937 3.937 0 0 0-2.222 6.642l12.392 12.707-2.935 17.977a3.94 3.94 0 0 0 5.797 4.082l15.126-8.365 15.126 8.365a3.94 3.94 0 0 0 5.796-4.082l-2.935-17.977 12.393-12.707a3.942 3.942 0 0 0 .914-4.001z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                  version="1.0"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#000"
                    d="M62.799 23.737a3.941 3.941 0 0 0-3.139-2.642l-16.969-2.593-7.622-16.237a3.938 3.938 0 0 0-7.13 0l-7.623 16.238-16.969 2.593a3.937 3.937 0 0 0-2.222 6.642l12.392 12.707-2.935 17.977a3.94 3.94 0 0 0 5.797 4.082l15.126-8.365 15.126 8.365a3.94 3.94 0 0 0 5.796-4.082l-2.935-17.977 12.393-12.707a3.942 3.942 0 0 0 .914-4.001z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                  version="1.0"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#000"
                    d="M62.799 23.737a3.941 3.941 0 0 0-3.139-2.642l-16.969-2.593-7.622-16.237a3.938 3.938 0 0 0-7.13 0l-7.623 16.238-16.969 2.593a3.937 3.937 0 0 0-2.222 6.642l12.392 12.707-2.935 17.977a3.94 3.94 0 0 0 5.797 4.082l15.126-8.365 15.126 8.365a3.94 3.94 0 0 0 5.796-4.082l-2.935-17.977 12.393-12.707a3.942 3.942 0 0 0 .914-4.001z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                  version="1.0"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#000"
                    d="M62.799 23.737a3.941 3.941 0 0 0-3.139-2.642l-16.969-2.593-7.622-16.237a3.938 3.938 0 0 0-7.13 0l-7.623 16.238-16.969 2.593a3.937 3.937 0 0 0-2.222 6.642l12.392 12.707-2.935 17.977a3.94 3.94 0 0 0 5.797 4.082l15.126-8.365 15.126 8.365a3.94 3.94 0 0 0 5.796-4.082l-2.935-17.977 12.393-12.707a3.942 3.942 0 0 0 .914-4.001z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                  version="1.0"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#000"
                    d="M62.799 23.737a3.941 3.941 0 0 0-3.139-2.642l-16.969-2.593-7.622-16.237a3.938 3.938 0 0 0-7.13 0l-7.623 16.238-16.969 2.593a3.937 3.937 0 0 0-2.222 6.642l12.392 12.707-2.935 17.977a3.94 3.94 0 0 0 5.797 4.082l15.126-8.365 15.126 8.365a3.94 3.94 0 0 0 5.796-4.082l-2.935-17.977 12.393-12.707a3.942 3.942 0 0 0 .914-4.001z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl pt-2.5">
              5 estrellas
            </h3>
            <p>desde 314 puntuaciones de nuestra web</p>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M22 22H2"
                />
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M20 22V11M4 22V11"
                  opacity=".5"
                />
                <path
                  stroke="#000"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2Z"
                />
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"
                  opacity=".5"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl pt-2.5">
              Establecidos desde el año 2000
            </h3>
            <p>Cerca de 30 años en el negocio</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-[20vh] pb-[15vh] px-5">
        <h2 className="text-5xl font-bold mb-10">Preguntas frecuentes</h2>

        <div className="space-y-4 text-lg sm:text-xl md:text-2xl">
          <details className="group rounded-md border border-gray-200 bg-white shadow-sm">
            <summary
              className="flex items-center justify-between cursor-pointer list-none px-5 py-4 font-medium
                         focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
            >
              <span>¿Por qué es conveniente comprar autos usados?</span>
              <svg
                className="ml-4 h-5 w-5 shrink-0 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>

            <div className="px-5 pb-4 text-gray-700 accordion-content">
              <p className="whitespace-pre-line">
                Comprar autos usados es una opción inteligente, ya que te
                permite obtener calidad a un precio más accesible. En Autocar,
                garantizamos la excelencia de cada vehículo, brindándote
                tranquilidad y confianza en tu elección.
              </p>
            </div>
          </details>
          <details className="group rounded-md border border-gray-200 bg-white shadow-sm">
            <summary
              className="flex items-center justify-between cursor-pointer list-none px-5 py-4 font-medium
                         focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
            >
              <span>
                ¿Cuál es el mejor momento para comprar autos usados en
                Argentina?
              </span>
              <svg
                className="ml-4 h-5 w-5 shrink-0 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>

            <div className="px-5 pb-4 text-gray-700 accordion-content">
              <p className="whitespace-pre-line">
                No hay un momento específico, pero en Autocar siempre
                encontrarás ofertas atractivas. ¡Explora nuestro catálogo en
                línea y descubre las promociones disponibles en cualquier época
                del año!
              </p>
            </div>
          </details>
          <details className="group rounded-md border border-gray-200 bg-white shadow-sm">
            <summary
              className="flex items-center justify-between cursor-pointer list-none px-5 py-4 font-medium
                         focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
            >
              <span>
                ¿Qué debo tener en cuenta antes de comprar un auto usado?
              </span>
              <svg
                className="ml-4 h-5 w-5 shrink-0 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>

            <div className="px-5 pb-4 text-gray-700 accordion-content">
              <p className="whitespace-pre-line">
                Es esencial conocer el historial del vehículo, sus
                características y realizar una prueba de manejo. En Autocar, te
                proporcionamos toda la información que necesitas y garantizamos
                transparencia en cada paso del proceso de compra.
              </p>
            </div>
          </details>
          <details className="group rounded-md border border-gray-200 bg-white shadow-sm">
            <summary
              className="flex items-center justify-between cursor-pointer list-none px-5 py-4 font-medium
                         focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
            >
              <span>¿Dónde se recomienda comprar un auto usado?</span>
              <svg
                className="ml-4 h-5 w-5 shrink-0 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>

            <div className="px-5 pb-4 text-gray-700 accordion-content">
              <p className="whitespace-pre-line">
                Recomendamos la compra de autos usados en Autocar, donde la
                calidad y la transparencia son fundamentales en cada aspecto de
                la experiencia de compra.
              </p>
            </div>
          </details>
        </div>
      </section>
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

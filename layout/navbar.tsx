"use client";

import CarSearch from "@/components/carsSearchBrowser";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-screen z-1 font-bold leading-[120%]">
      <nav className="flex justify-between bg-white/30 backdrop-blur-[10px] shadow-[inset_0px_1px_1px_1px_rgba(0,0,0,0.05)]  py-5 px-10 text-black">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <img src="/images/logo.png" className="h-8" alt="" />
          </Link>
        </div>
        <div className="w-full hidden lg:block">
          <CarSearch />
        </div>
        <div className="flex items-center justify-end gap-10 w-full">
          <div className="hidden lg:flex items-center justify-center gap-10">
            <Link
              href="/"
              className="relative block w-fit
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:h-px after:w-full after:bg-black
             after:origin-left after:scale-x-0
             after:transition-transform after:duration-300
             hover:after:scale-x-100 drop-shadow-lg"
            >
              Inicio
            </Link>
            <Link
              href="/autos"
              className="relative block w-fit
             after:content-[''] after:absolute after:left-0 after:bottom-0
             after:h-px after:w-full after:bg-black
             after:origin-left after:scale-x-0
             after:transition-transform after:duration-300
             hover:after:scale-x-100 drop-shadow-lg"
            >
              Ver autos
            </Link>
          </div>
          <div
            className="lg:hidden relative cursor-pointer w-13 h-13 rounded-xl flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <div className="flex flex-col justify-between w-6 h-5">
              <span
                className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-2.25" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-2.25" : ""
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`
    fixed top-[92px] left-0 h-screen w-[80vw] max-w-xs
    transform transition-transform duration-300 ease-in-out lg:hidden
    ${open ? "translate-x-0" : "-translate-x-full"}
    bg-white/30 backdrop-blur-[10px] shadow-[inset_0px_1px_1px_1px_rgba(0,0,0,0.05)]
  `}
          >
            <div className="flex flex-col gap-4 relative p-6 h-screen text-center text-black font-bold text-4xl">
              <Link href="/">Inicio</Link>
              <Link href="/sobre-nosotros">Ver autos</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

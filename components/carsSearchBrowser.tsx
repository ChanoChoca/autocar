"use client";

import { Car } from "@/app/generated/prisma/client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function CarSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cars, setCars] = useState<Car[]>([]);
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const fetchCards = useCallback(async (q: string) => {
    if (!q.trim()) {
      setCars([]);
      return;
    }

    const res = await fetch(`/api/autos?search=${encodeURIComponent(q)}`);
    const data: Car[] = await res.json();
    setCars(data);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchCards(query);
    }, 300);

    return () => clearTimeout(handler);
  }, [query, fetchCards]);

  useOutsideClick(wrapperRef, () => {
    setShowModal(false);
    inputRef.current?.blur();
  });

  const handleSelect = (car: Car) => {
    setShowModal(false);
    router.push(`/auto/${car.id}`);
  };

  useScrollLock(modalRef, showModal);

  const clearSearch = () => {
    setQuery("");
    setCars([]);
    setShowModal(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={wrapperRef} className="w-full max-w-xl mx-auto relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar auto por marca, modelo o año..."
          value={query}
          onFocus={() => setShowModal(true)}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 rounded border-2 border-black focus:outline-none w-full placeholder:text-black"
        />

        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-1"
            aria-label="Limpiar búsqueda"
          >
            ×
          </button>
        )}
      </div>

      {showModal && cars.length > 0 && (
        <div
          ref={modalRef}
          onWheel={(e) => e.stopPropagation()}
          className="absolute mt-1 w-full bg-white shadow-lg rounded max-h-64 overflow-y-auto overscroll-contain"
        >
          {cars.map((v) => (
            <div
              key={v.id}
              onClick={() => handleSelect(v)}
              className="p-3 border-b hover:bg-blue-50 cursor-pointer flex justify-between"
            >
              <span>
                {v.brand} {v.model}
              </span>
              <span className="text-gray-500">{v.year}</span>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div
          className="fixed inset-0"
          onClick={() => setShowModal(false)}
          aria-hidden
        />
      )}
    </div>
  );
}

/* export default async function CarsSearchBrowser({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search param="query" type="text" placeholder="Search invoices..." />
      </div>
      <Suspense key={query + currentPage} fallback={<div>Cargando...</div>}>
        <CarsList query={query} currentPage={currentPage} mode="list" />
      </Suspense>
    </div>
  );
} */

"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);
  const maxVisible = 5;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const getRange = () => {
    const range: (number | -1)[] = [];
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      const left = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      const right = Math.min(
        totalPages,
        currentPage + Math.floor(maxVisible / 2)
      );

      if (left > 1) {
        range.push(1);
        if (left > 2) range.push(-1);
      }

      for (let i = left; i <= right; i++) range.push(i);

      if (right < totalPages) {
        if (right < totalPages - 1) range.push(-1);
        range.push(totalPages);
      }
    }
    return range;
  };

  const range = getRange();

  return (
    <div className="flex justify-center gap-2 mt-6">
      <Link
        href={createPageURL(Math.max(1, currentPage - 1))}
        className="px-3 py-1 border rounded"
      >
        Prev
      </Link>

      {range.map((p, idx) =>
        p === -1 ? (
          <span key={idx} className="px-3 py-1">
            ...
          </span>
        ) : (
          <Link
            key={p}
            href={createPageURL(p)}
            className={`px-3 py-1 border rounded ${
              p === currentPage ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {p}
          </Link>
        )
      )}

      <Link
        href={createPageURL(Math.min(totalPages, currentPage + 1))}
        className="px-3 py-1 border rounded"
      >
        Sig
      </Link>
    </div>
  );
}

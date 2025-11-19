"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);
  const maxVisible = 5;
  const base = "px-3 py-1 border rounded";

  const urlFor = (p: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(p));
    return `${pathname}?${params.toString()}`;
  };

  const range = (() => {
    if (totalPages <= maxVisible)
      return Array.from({ length: totalPages }, (_, i) => i + 1) as (
        | number
        | -1
      )[];
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisible - 1);
    start = Math.max(1, end - maxVisible + 1);

    const out: (number | -1)[] = [];
    if (start > 1) {
      out.push(1);
      if (start > 2) out.push(-1);
    }
    for (let i = start; i <= end; i++) out.push(i);
    if (end < totalPages) {
      if (end < totalPages - 1) out.push(-1);
      out.push(totalPages);
    }
    return out;
  })();

  const prevDisabled = currentPage <= 1 || totalPages <= 1;
  const nextDisabled = currentPage >= totalPages || totalPages <= 1;

  return (
    <div className="flex justify-center gap-2 mt-6">
      {prevDisabled ? (
        <span className={`${base} text-gray-400 cursor-not-allowed`}>Prev</span>
      ) : (
        <Link href={urlFor(currentPage - 1)} className={base}>
          Prev
        </Link>
      )}

      {range.map((p, i) =>
        p === -1 ? (
          <span key={i} className="px-3 py-1">
            ...
          </span>
        ) : p === currentPage ? (
          <span key={p} className={`${base} bg-black text-white`}>
            {p}
          </span>
        ) : (
          <Link
            key={p}
            href={urlFor(p)}
            className={`${base} bg-white text-black`}
          >
            {p}
          </Link>
        )
      )}

      {nextDisabled ? (
        <span className={`${base} text-gray-400 cursor-not-allowed`}>Sig</span>
      ) : (
        <Link href={urlFor(currentPage + 1)} className={base}>
          Sig
        </Link>
      )}
    </div>
  );
}

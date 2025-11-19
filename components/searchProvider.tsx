"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type PrimitiveOrArray = string | string[];
type Updater =
  | PrimitiveOrArray
  | ((prev?: PrimitiveOrArray) => PrimitiveOrArray);

interface SearchState {
  [param: string]: PrimitiveOrArray | undefined;
}

interface SearchContextProps {
  values: SearchState;
  setValue: (param: string, value: Updater) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [values, setValues] = useState<SearchState>(() => {
    const init: SearchState = {};
    searchParams.forEach((value, key) => {
      init[key] = value.includes(",") ? value.split(",") : value;
    });
    return init;
  });

  const setValue = (param: string, updater: Updater) => {
    setValues((prev) => {
      const prevVal = prev[param];
      const nextVal =
        typeof updater === "function" ? updater(prevVal) : updater;

      const normalized = Array.isArray(nextVal)
        ? nextVal.length
          ? nextVal
          : undefined
        : nextVal || undefined;

      const changed =
        Array.isArray(prevVal) && Array.isArray(normalized)
          ? prevVal.length !== normalized.length ||
            !prevVal.every((v, i) => v === normalized[i])
          : prevVal !== normalized;

      if (!changed) return prev;
      return { ...prev, [param]: normalized };
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      Object.entries(values).forEach(([k, v]) => {
        if (Array.isArray(v)) params.set(k, v.join(","));
        else if (v) params.set(k, String(v));
      });
      params.set("page", "1");

      if (params.toString() !== searchParams.toString()) {
        replace(`${pathname}?${params.toString()}`);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [values, pathname, replace, searchParams]);

  return (
    <SearchContext.Provider value={{ values, setValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("useSearchContext must be used within a SearchProvider");
  return context;
}

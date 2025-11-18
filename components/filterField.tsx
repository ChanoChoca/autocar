"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterField({
  param,
  placeholder,
  type = "text",
  options,
  isCheckbox = false,
}: {
  param: string;
  placeholder?: string;
  type?: string;
  options?: string[];
  isCheckbox?: boolean;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const initialValues = searchParams.get(param)?.split(",") || [];
  const [value, setValue] = useState(
    type === "checkbox" ? initialValues : searchParams.get(param) || ""
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (isCheckbox) {
      value.length ? params.set(param, value.join(",")) : params.delete(param);
    } else {
      value ? params.set(param, value) : params.delete(param);
    }
    replace(`${pathname}?${params.toString()}`);
  }, [value]);

  if (isCheckbox && options) {
    const toggle = (val: string) => {
      setValue((prev) => {
        const prevArray = Array.isArray(prev) ? prev : [];
        return prevArray.includes(val)
          ? prevArray.filter((v) => v !== val)
          : [...prevArray, val];
      });
    };

    return (
      <div className="flex flex-col gap-1">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={Array.isArray(value) && value.includes(opt)}
              onChange={() => toggle(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  return options?.length ? (
    <select
      className="block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      className="block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search({
  param,
  placeholder,
  type = "text",
  options,
}: {
  param: string;
  placeholder: string;
  type?: string;
  options?: string[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [value, setValue] = useState(searchParams.get(param) || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      value ? params.set(param, value) : params.delete(param);
      replace(`${pathname}?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [value]);

  const commonProps = {
    className:
      "block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500",
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValue(e.target.value),
  };

  return options?.length ? (
    <select {...commonProps}>
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  ) : (
    <input type={type} placeholder={placeholder} {...commonProps} />
  );
}

"use client";

import { useSearchContext } from "./searchProvider";

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
  const { values, setValue } = useSearchContext();
  const value = values[param] || "";

  const commonProps = {
    className:
      "block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500",
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValue(param, e.target.value),
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

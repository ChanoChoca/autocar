"use client";

import { useSearchContext } from "./searchProvicer";

type OptionShape = { value: string; brand?: string };

export default function CheckboxGroup({
  param,
  options = [],
}: {
  param: string;
  options: (string | OptionShape)[];
}) {
  const { values, setValue } = useSearchContext();
  const selected: string[] = (values[param] as string[]) || [];
  const normalizedOptions: OptionShape[] = options.map((o) =>
    typeof o === "string" ? { value: o } : o
  );

  const toggle = (value: string, opt?: OptionShape) => {
    const isSelected = selected.includes(value);
    const newSelected = isSelected
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    setValue(param, newSelected);

    if (param === "models" && !isSelected && opt?.brand) {
      const currentBrands: string[] = (values["brands"] as string[]) || [];
      if (!currentBrands.includes(opt.brand))
        setValue("brands", [...currentBrands, opt.brand]);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {normalizedOptions.map((opt) => (
        <label
          key={opt.value + (opt.brand ?? "")}
          className="flex items-center gap-2"
        >
          <input
            type="checkbox"
            checked={selected.includes(opt.value)}
            onChange={() => toggle(opt.value, opt)}
          />
          <span>
            {opt.value}
            {opt.brand ? ` — ${opt.brand}` : null}
          </span>
        </label>
      ))}
    </div>
  );
}

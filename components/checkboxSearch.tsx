"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type OptionShape = { value: string; brand?: string };

export default function CheckboxGroup({
  param,
  options = [],
}: {
  param: string;
  options: (string | OptionShape)[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const initialValues = searchParams.get(param)?.split(",") || [];
  const [selected, setSelected] = useState<string[]>(initialValues);

  const normalizedOptions: OptionShape[] = options.map((o) =>
    typeof o === "string" ? { value: o } : o
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    if (selected.length) {
      params.set(param, selected.join(","));
    } else {
      params.delete(param);
    }
    replace(`${pathname}?${params.toString()}`);
  }, [selected, pathname]);

  const toggle = (value: string, opt?: OptionShape) => {
    const isSelected = selected.includes(value);
    const adding = !isSelected;

    setSelected((prev) =>
      isSelected ? prev.filter((v) => v !== value) : [...prev, value]
    );

    if (param === "models" && adding && opt?.brand) {
      const params = new URLSearchParams(searchParams.toString());
      const brandsParam =
        params.get("brands")?.split(",").filter(Boolean) || [];
      if (!brandsParam.includes(opt.brand)) {
        brandsParam.push(opt.brand);
        params.set("brands", brandsParam.join(","));
      }
      params.set("page", "1");
      replace(`${pathname}?${params.toString()}`);
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

import { useEffect } from "react";

export function useScrollLock(
  ref: React.RefObject<HTMLElement | null>,
  active: boolean
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;

    const onWheel = (e: WheelEvent) => {
      if (el.scrollHeight <= el.clientHeight) return;

      const delta = e.deltaY;
      const top = el.scrollTop === 0;
      const bottom =
        Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

      if ((top && delta < 0) || (bottom && delta > 0)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.stopPropagation();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as EventListener);
  }, [ref, active]);
}

import { useState, useEffect } from "react";

export function useActiveElement(
  refs: React.RefObject<(HTMLElement | null)[]>,
) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;
      let minDistance = Infinity;
      let closestIndex: number | null = null;

      const threshold = 300;

      const elements = refs.current;
      if (!elements) return;

      elements.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(windowCenter - elementCenter);

        if (distance < threshold && distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  return activeIndex;
}

import { useState, useEffect } from "react";

export function useActiveElement(refs: React.RefObject<HTMLElement>[]) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;
      let minDistance = Infinity;
      let closestIndex: number | null = null;

      const threshold = 300;

      refs.forEach((ref, index) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
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

"use client";

import { useEffect, useMemo, useState } from "react";
import { useInView } from "./ScrollReveal";

export function useCountUp(target: number, start: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [durationMs, start, target]);

  return value;
}

type AnimatedCounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  durationMs?: number;
  decimals?: number;
};

export default function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  className,
  durationMs = 1400,
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const value = useCountUp(to, inView, durationMs);

  const formatted = useMemo(() => {
    const fixed = value.toFixed(decimals);
    const [whole, decimal] = fixed.split(".");
    const withCommas = Number(whole).toLocaleString();
    return decimal ? `${withCommas}.${decimal}` : withCommas;
  }, [decimals, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

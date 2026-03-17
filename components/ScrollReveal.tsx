"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
        ...options,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  distance?: number;
  direction?: "up" | "left" | "right";
};

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  distance = 22,
  direction = "up",
}: ScrollRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const axis = direction === "up" ? "Y" : "X";
  const offset = direction === "right" ? -distance : distance;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0, 0, 0)" : `translate${axis}(${offset}px)`,
        transition:
          `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, ` +
          `transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

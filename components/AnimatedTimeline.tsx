"use client";

import { useEffect, useState } from "react";

const STEPS = [
  "Free consult",
  "Role architecture",
  "Agent build",
  "Stack integration",
  "Go live + optimize",
];

const INTERVAL_MS = 2500;

export default function AnimatedTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [connectorAnimating, setConnectorAnimating] = useState(false);

  useEffect(() => {
    setConnectorAnimating(false);

    const frame = requestAnimationFrame(() => {
      setConnectorAnimating(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [activeStep]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="space-y-4 md:hidden">
        {STEPS.map((step, idx) => {
          const isActive = idx === activeStep;

          return (
            <div key={step} className="flex items-center gap-4">
              <div
                className={`grid h-10 w-10 shrink-0 place-content-center rounded-full border text-sm font-semibold transition-all duration-500 ease-in-out ${
                  isActive
                    ? "scale-110 border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_0_0_6px_rgba(255,76,0,0.14)]"
                    : "border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)]"
                }`}
              >
                {idx + 1}
              </div>
              <p
                className={`text-sm transition-all duration-500 ease-in-out ${
                  isActive
                    ? "font-semibold text-[var(--text-primary)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>

      <div className="relative hidden md:block">
        <div className="pointer-events-none absolute left-0 right-0 top-5 flex items-center">
          {STEPS.slice(0, -1).map((step, idx) => {
            const width = idx < activeStep ? "100%" : idx === activeStep && connectorAnimating ? "100%" : "0%";

            return (
              <div key={`connector-${step}`} className="flex-1 px-6">
                <div className="h-[3px] overflow-hidden rounded-full bg-[var(--border)]">
                  <div
                    className="h-full rounded-full bg-[var(--accent)] transition-all ease-in-out"
                    style={{ width, transitionDuration: `${INTERVAL_MS}ms` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-7 md:grid-cols-5">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeStep;

            return (
              <div key={step} className="relative z-10 flex flex-col items-center">
                <div
                  className={`grid h-10 w-10 place-content-center rounded-full border text-sm font-semibold transition-all duration-500 ease-in-out ${
                    isActive
                      ? "scale-110 border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_0_0_6px_rgba(255,76,0,0.14)]"
                      : "border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)]"
                  }`}
                >
                  {idx + 1}
                </div>
                <p
                  className={`mt-3 text-center text-sm transition-all duration-500 ease-in-out ${
                    isActive
                      ? "font-semibold text-[var(--text-primary)]"
                      : "text-[var(--text-muted)]"
                  }`}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TargetIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}

export function BoltIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <path d="M13 2 5 13h6l-1 9 9-12h-6z" />
    </svg>
  );
}

export function TrendUpIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <path d="M4 19h16" />
      <path d="M6 15l4-4 3 3 5-6" />
      <path d="M16 8h2v2" />
    </svg>
  );
}

export function WalletIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M3 10h18" />
      <circle cx="16" cy="14" r="1" />
    </svg>
  );
}

export function RocketIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <path d="M10 14c-2-2-2-6 1-9 3 0 7 0 9 3-3 3-7 3-10 6Z" />
      <path d="M9 15 5 19" />
      <path d="M8 20H4v-4" />
      <circle cx="14.5" cy="8.5" r="1.2" />
    </svg>
  );
}

export function ScaleIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <path d="M12 4v14" />
      <path d="M6 8h12" />
      <path d="M4 8 2 12h4z" />
      <path d="M20 8 18 12h4z" />
      <path d="M8 22h8" />
    </svg>
  );
}

export function TrapIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <path d="M12 3 21 19H3z" />
      <path d="M12 9v5" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function UserIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 19a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function BotIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <rect x="5" y="7" width="14" height="10" rx="3" />
      <path d="M12 4v3M8.5 12h.01M15.5 12h.01M9 17v2M15 17v2" />
    </svg>
  );
}

export function CogIcon({ className, ...props }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    </svg>
  );
}

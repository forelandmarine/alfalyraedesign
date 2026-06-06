import React from 'react';

/* ──────────────────────────────────────────────────────────
   Service icons — drawn for Alpha Lyrae Design
   Stroke-based, 48×48 viewBox, currentColor.
   ────────────────────────────────────────────────────────── */

type IconProps = { className?: string; size?: number };

const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function LinkedInIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9H7.12v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function YachtDesignIcon({ className, size = 48 }: IconProps) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      {/* waterline */}
      <line x1="2" y1="40" x2="46" y2="40" opacity="0.5" />
      {/* hull */}
      <path d="M5 36 H43 L39 41 H9 Z" />
      {/* mast */}
      <line x1="22" y1="36" x2="22" y2="4" />
      {/* mainsail */}
      <path d="M22 7 L22 33 L37 33 Z" />
      {/* jib */}
      <path d="M22 11 L22 33 L11 33 Z" />
      {/* boom */}
      <line x1="22" y1="33" x2="37" y2="33" opacity="0.7" />
    </svg>
  );
}

export function ProductDesignIcon({ className, size = 48 }: IconProps) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      {/* construction circle */}
      <circle cx="24" cy="24" r="18" />
      {/* horizontal axis */}
      <line x1="3" y1="24" x2="45" y2="24" opacity="0.5" />
      {/* vertical axis */}
      <line x1="24" y1="3" x2="24" y2="45" opacity="0.5" />
      {/* inner circle */}
      <circle cx="24" cy="24" r="7" />
      {/* compass triangle */}
      <path d="M24 10 L28 24 L24 38 L20 24 Z" />
    </svg>
  );
}

export function PrintingIcon({ className, size = 48 }: IconProps) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      {/* gantry rail */}
      <line x1="6" y1="8" x2="42" y2="8" />
      {/* head */}
      <path d="M22 8 V14 H26 V8" />
      {/* nozzle */}
      <line x1="24" y1="14" x2="24" y2="18" />
      {/* layered object — stepped pyramid */}
      <path d="M14 40 H34" />
      <path d="M16 36 H32" />
      <path d="M18 32 H30" />
      <path d="M20 28 H28" />
      <path d="M22 24 H26" />
      {/* bed */}
      <line x1="4" y1="43" x2="44" y2="43" opacity="0.5" />
    </svg>
  );
}

export function ManagementIcon({ className, size = 48 }: IconProps) {
  return (
    <svg {...baseProps} width={size} height={size} className={className}>
      {/* time axis */}
      <line x1="4" y1="42" x2="44" y2="42" opacity="0.5" />
      {/* tick marks */}
      <line x1="10" y1="42" x2="10" y2="44" opacity="0.5" />
      <line x1="20" y1="42" x2="20" y2="44" opacity="0.5" />
      <line x1="30" y1="42" x2="30" y2="44" opacity="0.5" />
      <line x1="40" y1="42" x2="40" y2="44" opacity="0.5" />
      {/* gantt bars */}
      <rect x="6" y="10" width="22" height="5" />
      <rect x="14" y="20" width="26" height="5" />
      <rect x="22" y="30" width="18" height="5" />
      {/* row gridlines */}
      <line x1="4" y1="17.5" x2="44" y2="17.5" opacity="0.25" />
      <line x1="4" y1="27.5" x2="44" y2="27.5" opacity="0.25" />
      <line x1="4" y1="37.5" x2="44" y2="37.5" opacity="0.25" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className ?? "w-4 h-4"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m19 9-7 7-7-7"
      />
    </svg>
  );
}

export function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className ?? "w-7 h-7"}
      style={style}
    >
      <path
        fillRule="evenodd"
        d="M12 2c5.5191 0 10 4.48086 10 10 0 5.5191-4.4809 10-10 10-5.51914 0-10-4.4809-10-10C2 6.48086 6.48086 2 12 2Zm0 3.75c-1.6974 0-1.9102.00719-2.57688.03762-.66523.03035-1.11957.13601-1.51714.29051-.41098.15972-.75953.37343-1.107.72089-.34746.34746-.56117.69602-.72089 1.107-.1545.39753-.26012.85187-.29051 1.5171C5.75719 10.0898 5.75 10.3026 5.75 12s.00719 1.9102.03758 2.5769c.03039.6652.13601 1.1195.29051 1.5171.15972.411.37343.7595.72089 1.107.34747.3475.69602.5612 1.107.7209.39757.1545.85191.2601 1.51714.2905.66668.0304.87948.0376 2.57688.0376s1.9102-.0072 2.5769-.0376c.6652-.0304 1.1195-.136 1.5171-.2905.411-.1597.7595-.3734 1.107-.7209.3475-.3475.5612-.696.7209-1.107.1545-.3976.2601-.8519.2905-1.5171C18.2428 13.9102 18.25 13.6974 18.25 12s-.0072-1.9102-.0376-2.57688c-.0304-.66523-.136-1.11957-.2905-1.5171-.1597-.4109-.3734-.75953-.7209-1.107-.3475-.34746-.696-.56117-1.107-.72089-.3976-.1545-.8519-.26016-1.5171-.29051C13.9102 5.75719 13.6974 5.75 12 5.75Zm0 1.6216c1.6691 0 1.8668.00639 2.5261.03641.6096.02778.9409.12949 1.161.21504.2919.11347.5002.24902.719.46785.2188.21883.355.42715.4685.71901.0855.22012.1872.55143.215 1.161.03 .65933.0364.85699.0364 2.52614 0 1.66914-.0064 1.86672-.0364 2.52604-.0278.6096-.1295.9409-.215 1.161-.1135.2919-.2497.5002-.4685.719-.2188.2188-.4271.355-.719.4685-.2201.0856-.5514.1873-1.161.2151-.6593.03-. 85702.0364-2.5261.0364-1.66915 0-1.86683-.0064-2.52614-.0364-.60959-.0278-.94090-.1295-1.16102-.2151-.29186-.1135-.50018-.2497-.71901-.4685-.21883-.2188-.35438-.4271-.46785-.719-.08555-.2201-.18726-.5514-.21504-1.161-.03002-.65932-.03641-.8569-.03641-2.52604 0-1.66915.00639-1.86681.03641-2.52614.02778-.60957.12949-.94088.21504-1.161.11347-.29186.24902-.50018.46785-.71901.21883-.21883.42715-.35438.71901-.46785.22012-.08555.55143-.18726 1.16102-.21504C10.1332 7.43799 10.3309 7.4316 12 7.4316ZM12 9.58331c-1.33164 0-2.41085 1.07921-2.41085 2.41079 0 1.3316 1.07921 2.4108 2.41085 2.4108 1.33159 0 2.41079-1.0792 2.41079-2.4108 0-1.33158-1.0792-2.41079-2.41079-2.41079Zm0 3.97299c-.86768 0-1.5622-.6946-1.5622-1.5622 0-.86769.69452-1.5622 1.5622-1.5622.86768 0 1.5622.69451 1.5622 1.5622 0 .8676-.69452 1.5622-1.5622 1.5622Zm3.0695-4.59121c-.3116 0-.5642.25258-.5642.5642 0 .31159.2526.56418.5642.56418.3116 0 .5642-.25259.5642-.56418 0-.31162-.2526-.5642-.5642-.5642Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className ?? "h-5 w-5"}
    >
      <path
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

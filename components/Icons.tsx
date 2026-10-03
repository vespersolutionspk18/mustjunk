type IconProps = {
  className?: string;
  size?: number;
};

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
  focusable: "false" as const,
};

export function IconClock({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7V7z" />
    </svg>
  );
}

export function IconPen({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.7 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  );
}

export function IconArrowRight({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M13.2 5.6 11.8 4.2 19.6 12l-7.8 7.8 1.4 1.4L22 12zM4 11h13v2H4z" />
    </svg>
  );
}

export function IconCheck({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M9.6 16.2 5.4 12l-1.4 1.4 5.6 5.6 12-12-1.4-1.4z" />
    </svg>
  );
}

export function IconPhone({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
    </svg>
  );
}

export function IconFacebook({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.8V14h2.7v8h3z" />
    </svg>
  );
}

export function IconInstagram({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.8-.1zM12 0C8.7 0 8.3 0 7 .1 5.7.2 4.8.3 4 .6c-.8.3-1.5.7-2.2 1.4C1.1 2.7.7 3.4.4 4.2.1 5 .1 5.9 0 7.2c0 1.3 0 1.7.1 3 .1 1.3.2 2.2.5 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.4 3 .5 1.3.1 1.7.1 3 .1s1.7 0 3-.1c1.3-.1 2.2-.2 3-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.4-1.7.5-3 .1-1.3.1-1.7.1-3s0-1.7-.1-3c-.1-1.3-.2-2.2-.5-3a5.9 5.9 0 0 0-1.4-2.2 5.9 5.9 0 0 0-2.2-1.4c-.8-.3-1.7-.4-3-.5C13.7 0 13.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.4 1.4 0 1 1-2.9 0 1.4 1.4 0 0 1 2.9 0z" />
    </svg>
  );
}

export function IconGoogle({ className, size = 20 }: IconProps) {
  return (
    <svg
      {...base}
      className={className}
      width={size}
      height={size}
      fill="#4285F4"
    >
      <path d="M12.2 10.9v2.9h4.5c-.2 1.2-1.5 3.6-4.5 3.6-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.7 3.2 1.2l2.1-2c-1.1-1-2.5-1.6-5.3-1.6-4.5 0-8.1 3.6-8.1 7.4s3.6 7.4 8.1 7.4c4.7 0 7.8-3.3 7.8-7.9 0-.5 0-1-.1-1.4h-7.7z" />
    </svg>
  );
}

export function IconYelp({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size} fill="#C41200">
      <path d="M12 2.1c.3 0 .5.2.7.4l1.6 2.3 3-.6c.5-.1.9.3.8.8l-.9 6.6 2.4 3.3c.3.4.1 1-.4 1.1L12 18.4l-7.2-2.4c-.5-.1-.7-.7-.4-1.1l2.4-3.3-.9-6.6c-.1-.5.3-.9.8-.8l3 .6L11.3 2.5c.2-.3.4-.4.7-.4z" />
    </svg>
  );
}

export function IconMenu({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="square"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function IconRecycle({ className, size = 20 }: IconProps) {
  return (
    <svg {...base} className={className} width={size} height={size}>
      <path d="M12 2 9.6 6h1.8l1.5 2.5-1.6.9-.6-1H9.2l-1 1.7 3 1.7 3-1.7-1-1.7-.5.9-1.6-.9L12 2zM4.9 8.1 2.4 12.5l.8 1.4 1.2-.7 2 3.4-1.3.6.5 1.5 4.5-.9.1-1.5-1.3.2-2-3.4 1.2-.7.8 1.3 1.4-.8-2.5-4.4-1.4.8-.1 1.3 2 3.4-1.2.7-2-3.4-1.3.5-.5-1.5 4.5 1 .1-1.5-1.3-.2 2-3.4-1.2-.7-1.3.8zM19.6 8.1 14.7 13l1.4.8.1-1.3 2 3.4-1.3-.4-.4 1.5 4.5 1-.1-1.5-1.3-.3 2-3.4 1.2.7.9-1.3-2.5-4.4z" />
    </svg>
  );
}

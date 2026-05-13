export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2C9.92 2 5 6.92 5 13c0 7.5 11 17 11 17s11-9.5 11-17c0-6.08-4.92-11-11-11z"
        fill="#006CA3"
      />
      <path
        d="M11 11h3v10h-3V11zm5 0l4 5-4 5h3l4-5-4-5h-3z"
        fill="#ffffff"
      />
    </svg>
  );
}

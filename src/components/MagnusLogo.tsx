import React from "react";

interface MagnusLogoProps {
  className?: string;
  size?: number;
}

export default function MagnusLogo({ className = "", size = 40 }: MagnusLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blue Shield Outline */}
      <path
        d="M256 428C213 404 148.5 348 131 292C111.5 229.5 133.5 152 165 133C210 106 244.5 110.5 256 112C267.5 110.5 302 106 347 133C378.5 152 400.5 229.5 381 292C363.5 348 299 404 256 428Z"
        stroke="#0052a5"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Stylized M inside */}
      <path
        d="M174 329 L174 185 L198 198 C212 178 240 215 256 242 C272 215 300 178 314 198 L338 185 L338 329 L314 300 L314 220 C294 250 276 270 256 248 C236 270 218 250 198 220 L198 300 Z"
        fill="#0052a5"
      />
    </svg>
  );
}

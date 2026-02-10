"use client";

import React from "react";

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className = "" }) => {
  return (
    <>
      {/* Inline CSS inside same component — No external CSS file used */}
      <style jsx>{`
        @keyframes digi-float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.05);
          }
        }

        @keyframes digi-draw {
          0%, 20% {
            stroke-dashoffset: 60;
          }
          50%, 80% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -60;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-svg,
          .checkmark-path {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className={`flex items-center justify-center ${className}`}
        role="status"
        aria-label="Loading"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="loader-svg animate-[digi-float_2s_ease-in-out_infinite]"
        >
          <path
            d="M12 24L20 32L36 16"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="checkmark-path animate-[digi-draw_2s_ease-in-out_infinite]"
          />

          <defs>
            <linearGradient id="gradient" x1="12" y1="24" x2="36" y2="16">
              <stop offset="0%" stopColor="#6D5CEB" />
              <stop offset="100%" stopColor="#2DA4EF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

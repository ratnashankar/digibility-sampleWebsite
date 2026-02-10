"use client";

import React from "react";

interface DigiLoaderProps {
  size?: number;
  darkMode?: boolean;
}

export const DigiLoader: React.FC<DigiLoaderProps> = ({
  size = 48,
  darkMode = false,
}) => {
  const gradientId = `gradient-${darkMode ? "dark" : "light"}`;

  return (
    <div
      className="inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[digiLoaderScale_0.8s_cubic-bezier(0.4,0,0.2,1)_infinite_alternate]"
      >
        <defs>
          <linearGradient id={gradientId} x1="12" y1="24" x2="36" y2="16">
            <stop offset="0%" stopColor={darkMode ? "#ffffff" : "#6D5CEB"} />
            <stop offset="100%" stopColor={darkMode ? "#ffffff" : "#2DA4EF"} />
          </linearGradient>
        </defs>

        <path
          d="M12 24L20 32L36 16"
          stroke={darkMode ? "#ffffff" : `url(#${gradientId})`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[digiCheckStroke_1.2s_cubic-bezier(0.65,0,0.35,1)_infinite]"
        />
      </svg>

      {/* Custom Tailwind animations */}
      <style>
        {`
          @keyframes digiCheckStroke {
            0% { stroke-dashoffset: 60; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -60; }
          }

          @keyframes digiLoaderScale {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-[digiLoaderScale_0.8s_cubic-bezier(0.4,0,0.2,1)_infinite_alternate],
            .animate-[digiCheckStroke_1.2s_cubic-bezier(0.65,0,0.35,1)_infinite] {
              animation: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

interface DigiLoaderOverlayProps {
  darkMode?: boolean;
}

export const DigiLoaderOverlay: React.FC<DigiLoaderOverlayProps> = ({
  darkMode = false,
}) => {
  return (
    <div className="fixed inset-0 bg-[rgba(248,250,255,0.95)] backdrop-blur-md flex items-center justify-center z-[9999]">
      <DigiLoader size={64} darkMode={darkMode} />
    </div>
  );
};

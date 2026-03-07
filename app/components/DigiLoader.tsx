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
  const gradientId = `digi-gradient-${darkMode ? "dark" : "light"}`;

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
        aria-hidden="true"
        className="digi-loader"
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
          className="digi-loader-path"
        />
      </svg>
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

"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

interface ToasterProps extends React.ComponentProps<typeof Sonner> {}

const Toaster: React.FC<ToasterProps> = ({ ...props }) => {
  const { theme } = useTheme();

  // FIX: Convert incoming string to strict allowed values
  const sonnerTheme: "light" | "dark" | "system" =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  return (
    <Sonner
      theme={sonnerTheme}    // ← FIXED HERE
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

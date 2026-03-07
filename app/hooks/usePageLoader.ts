"use client";

import { useState, useCallback } from "react";

export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = useCallback(() => setIsLoading(true), []);
  const hideLoader = useCallback(() => setIsLoading(false), []);
  const toggleLoader = useCallback(() => setIsLoading((prev) => !prev), []);

  return { isLoading, showLoader, hideLoader, toggleLoader };
}
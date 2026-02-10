"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/* Pagination Root                                                            */
/* -------------------------------------------------------------------------- */

export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement> {}

export const Pagination = ({ className, ...props }: PaginationProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

Pagination.displayName = "Pagination";

/* -------------------------------------------------------------------------- */
/* Pagination Content                                                         */
/* -------------------------------------------------------------------------- */

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));

PaginationContent.displayName = "PaginationContent";

/* -------------------------------------------------------------------------- */
/* Pagination Item                                                            */
/* -------------------------------------------------------------------------- */

export const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));

PaginationItem.displayName = "PaginationItem";

/* -------------------------------------------------------------------------- */
/* Pagination Link                                                            */
/* -------------------------------------------------------------------------- */

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
}

export const PaginationLink = React.forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ className, isActive, size = "icon", ...props }, ref) => (
  <a
    ref={ref}
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
));

PaginationLink.displayName = "PaginationLink";

/* -------------------------------------------------------------------------- */
/* Previous Button                                                            */
/* -------------------------------------------------------------------------- */

export const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
));

PaginationPrevious.displayName = "PaginationPrevious";

/* -------------------------------------------------------------------------- */
/* Next Button                                                                */
/* -------------------------------------------------------------------------- */

export const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
));

PaginationNext.displayName = "PaginationNext";

/* -------------------------------------------------------------------------- */
/* Ellipsis (More...)                                                         */
/* -------------------------------------------------------------------------- */

export const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
));

PaginationEllipsis.displayName = "PaginationEllipsis";

import clsx from "clsx";
import type { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "circle" | "text";
}

export const Skeleton = ({
  className,
  variant = "default",
  ...props
}: SkeletonProps) => {
  const variantClasses = {
    default: "rounded",
    circle: "rounded-full",
    text: "rounded h-4",
  };

  return (
    <div
      className={clsx(
        "animate-pulse bg-linear-to-r from-bg-interactive-secondary via-bg-interactive-hover to-bg-interactive-secondary bg-size-[200%_100%] animate-shimmer",
        variantClasses[variant],
        className,
      )}
      style={{
        animation: "shimmer 1.5s infinite",
      }}
      {...props}
    />
  );
};

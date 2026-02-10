import clsx from "clsx";
import type { ComponentProps, ElementType } from "react";

type TagProps<T extends ElementType = "button"> = {
  as?: T;
  active?: boolean;
  tag: string;
  className?: string;
} & ComponentProps<T>;

export const Tag = <T extends ElementType = "button">({
  as: Component = "button",
  active = false,
  tag,
  className,
  ...props
}: TagProps<T>) => {
  return (
    <Component
      className={clsx(
        className,
        "cursor-pointer flex items-center justify-center min-w-[73px] px-3 py-2 border-border-base rounded-[45px] font-bold disabled:bg-bg-input-hover hover:bg-bg-input-hover",
        `${active ? "text-bg-primary bg-text-primary" : "bg-bg-primary"}`,
      )}
      {...props}
    >
      #{tag}
    </Component>
  );
};

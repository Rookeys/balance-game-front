import { cn } from "@/utils/cn";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "bg-blue-500 text-white"
    : "bg-transparent text-gray-800 shadow-inner border";

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-5 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  return (
    <button
      type="button"
      className={cn(
        "inline-block cursor-pointer font-bold rounded-full",
        sizeClasses[size],
        mode
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};

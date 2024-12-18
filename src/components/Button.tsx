import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Primary 버튼이 맞나요? */
  primary?: boolean;
  /** background color 색상 */
  backgroundColor?: string;
  /** 버튼의 크기 설정 */
  size?: "small" | "medium" | "large";
  /** 버튼 클릭 시 사용 될 함수 */
  onClick?: () => void;
  /** Button 콘텐츠 내용 */
  children: ReactNode;
}

/** 기본적인 Button 컴포넌트 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  className,
  children,
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
        "inline-block cursor-pointer rounded-full",
        sizeClasses[size],
        mode,
        className
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {children}
    </button>
  );
};

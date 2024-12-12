import { cn } from "@/utils/cn";

const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("bg-gray-30 animate-pulse rounded-md", className)} />
  );
};

export default Skeleton;

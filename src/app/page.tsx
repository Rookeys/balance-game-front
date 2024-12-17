import { Button } from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  빌드오류 테스트
  return (
    <>
      <button className="p-[40px] rounded-lg bg-primary text-white dark:bg-white dark:text-primary">
        test
      </button>
      <Button>버튼</Button>
      <ThemeToggle />
    </>
  );
}

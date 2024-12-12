import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <button className="p-[40px] rounded-lg bg-primary text-white dark:bg-white dark:text-primary">
        test
      </button>
      <ThemeToggle />
    </>
  );
}

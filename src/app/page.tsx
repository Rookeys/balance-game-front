"use client";
import ThemeToggle from "@/components/ThemeToggle";
import { signIn } from 'next-auth/react';

export default function Home() {
  const handleKakaoSignIn = () => {
    signIn("kakao");
  };

  return (
    <>
      <ThemeToggle />
      <button onClick={handleKakaoSignIn}>로그인</button>
    </>
  );
}

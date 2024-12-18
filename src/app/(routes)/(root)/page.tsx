"use client";
import ThemeToggle from "@/components/ThemeToggle";
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data } = useSession()
  const handleKakaoSignIn = () => {
    signIn("kakao");
  };

  return (
    <>
      <ThemeToggle />
      {!data && <button onClick={handleKakaoSignIn}>로그인</button>}
      {data && <button onClick={() => signOut()}>로그아웃</button>}
    </>
  );
}

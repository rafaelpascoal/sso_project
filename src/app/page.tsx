'use client'

import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Welcome {session.user?.name}!</h1>
        <p className="mt-4">You are signed in as {session.user?.email}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome to SSO Project!</h1>
      <button
        className="px-4 py-2 mt-4 rounded-lg text-white bg-blue-500 hover:bg-blue-700"
        onClick={() => signIn("auth0")}
      >
        Login
      </button>
    </div>
  );
}

// src/app/dashboard/page.tsx
"use client"; // use client to use the session and signOut function

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {session ? (
        <>
          <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
          <button
            className="px-4 py-2 mt-4 rounded-lg text-white bg-red-500 hover:bg-red-700"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </>
      ) : (
        <p>You are not logged in. Log in to access the dashboard.</p>
      )}
    </div>
  );
}

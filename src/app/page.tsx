// use client to use the session and signIn function
'use client'

// import the useSession and signIn function from next-auth/react
import { useSession, signIn } from "next-auth/react";

// This is the main page of the application
export default function Home() {
  const { data: session, status } = useSession();

  // If the user is loading, show a loading message
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If the user is authenticated, show a welcome message
  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Welcome {session.user?.name}!</h1>
        <p className="mt-4">You are signed in as {session.user?.email}</p>
      </div>
    );
  }

  // If the user is not authenticated, show a login button
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




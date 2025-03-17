// use client to use the session and signOut function
'use client';

// import the SessionProvider from next-auth/react
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
} 
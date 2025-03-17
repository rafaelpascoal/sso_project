// src/app/login/page.tsx
'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("auth0", { callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Log in</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 rounded border"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 rounded border"
        />
        <button type="submit" className="bg-blue-500 p-2 rounded text-white">
          Login
        </button>
      </form>
    </div>
  );
}

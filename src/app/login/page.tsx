// src/app/login/page.tsx
'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const result = await signIn("auth0", {
        redirect: false,
      });
      
      if (result?.error) {
        setError(result.error);
        console.error('Sign in error:', result.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Log in</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <button 
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login with Auth0
      </button>
    </div>
  );
}

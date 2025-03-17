'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// This is the content of the error page for the authentication process.
function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams?.get('error');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
      <p className="text-gray-600">
        {error === 'Configuration' && 'There is a problem with the server configuration.'}
        {error === 'AccessDenied' && 'You do not have permission to sign in.'}
        {error === 'Verification' && 'The verification token has expired or has already been used.'}
        {!error && 'An error occurred during authentication.'}
      </p>
    </div>
  );
}

// This is the error page for the authentication process.
export default function AuthError() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorContent />
    </Suspense>
  );
} 
// This is the route handler for the authentication process
import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

if (!process.env.AUTH0_CLIENT_ID) {
  throw new Error("Missing AUTH0_CLIENT_ID environment variable");
}

if (!process.env.AUTH0_CLIENT_SECRET) {
  throw new Error("Missing AUTH0_CLIENT_SECRET environment variable");
}

if (!process.env.AUTH0_ISSUER) {
  throw new Error("Missing AUTH0_ISSUER environment variable");
}

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Missing NEXTAUTH_SECRET environment variable");
}

const handler = NextAuth({
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
        error: '/auth/error',
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            console.log('Redirect callback - URL:', url);
            console.log('Redirect callback - Base URL:', baseUrl);
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
        async session({ session, token }) {
            console.log('Session callback - Session:', session);
            return session;
        },
        async jwt({ token, user, account }) {
            console.log('JWT callback - Token:', token);
            console.log('JWT callback - User:', user);
            console.log('JWT callback - Account:', account);
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    userId: user.id,
                };
            }
            return token;
        },
    },
    debug: true, // Enable debug logs
});

export { handler as GET, handler as POST }; 

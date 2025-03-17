// This is the route handler for the authentication process
import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID!, // The client ID for the Auth0 application
            clientSecret: process.env.AUTH0_CLIENT_SECRET!, // The client secret for the Auth0 application
            issuer: process.env.AUTH0_ISSUER!, // The issuer for the Auth0 application
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET, // The secret for the NextAuth.js application
    pages: {
        signIn: '/login', // The sign in page for the application
        error: '/auth/error', // The error page for the application
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
});

export { handler as GET, handler as POST }; 

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

// import the Inter font from next/font/google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// This is the metadata for the application
export const metadata: Metadata = {
  title: "Create Next App for SSO",
  description: "Generated by create next app for SSO",
};

// This is the layout component for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers> 
      </body>
    </html>
  );
}



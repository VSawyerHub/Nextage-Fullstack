'use client';

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "@/styles/globals.css";
import { AuthProvider } from "@/contexts/authcontext";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  {
    return (
        <html lang="en">
        <body>
        <SessionProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </SessionProvider>
        </body>
        </html>
    );
}
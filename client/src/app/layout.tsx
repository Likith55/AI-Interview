import type { Metadata } from "next";

import "./globals.css";

import {
  ClerkProvider,
} from "@clerk/nextjs";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AI Interview Platform",
  description:
    "AI Voice Interview Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <ClerkProvider>

      <html lang="en">

        <body>

          <Navbar />

          {children}

        </body>

      </html>

    </ClerkProvider>
  );
}
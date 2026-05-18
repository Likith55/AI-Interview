"use client";

import Link from "next/link";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {

  return (

    <nav className="w-full flex items-center justify-between px-10 py-6 bg-zinc-950 border-b border-zinc-800 text-white">

      <Link
        href="/"
        className="text-2xl font-bold text-cyan-400"
      >
        AI Interview
      </Link>

      <div className="flex items-center gap-6">

        <Link href="/">
          Home
        </Link>

        <Link href="/resume">
          Resume
        </Link>

        <Link href="/interview">
          Interview
        </Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/leaderboard">
          Leaderboard
        </Link>

        <SignedOut>

          <SignInButton />

        </SignedOut>

        <SignedIn>

          <UserButton />

        </SignedIn>

      </div>

    </nav>
  );
}
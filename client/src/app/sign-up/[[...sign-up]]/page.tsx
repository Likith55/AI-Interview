"use client";

import {
  SignUp,
} from "@clerk/nextjs";

export default function Page() {

  return (

    <main className="min-h-screen bg-black flex items-center justify-center">

      <SignUp />

    </main>
  );
}
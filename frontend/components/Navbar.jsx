"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
          PropWise AI
        </Link>

        <div className="flex gap-8">
        {/* Links */}
        <div className="flex  gap-8 items-center text-sm">
          <Link href="/predict">Predict</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/#about">About</Link>
        </div>

        {/* CTA */}
        <Link
          href="/predict"
          className="bg-black border  text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition"
        >
          Try Now
        </Link>
        </div>
      </div>
    </nav>
  );
}
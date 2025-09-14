"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isCommunityOpen, setCommunityOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
        <span className="font-bold text-lg">Open Source Space Foundation</span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 text-sm sm:text-base font-medium">
        <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </a>
        <a
          href="/projects"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Projects
        </a>
        <div
          className="relative"
          onMouseEnter={() => setCommunityOpen(true)}
          onMouseLeave={() => setCommunityOpen(false)}
        >
          <button className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
            Community ▾
          </button>
          {isCommunityOpen && (
            <div className="absolute mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2 w-40">
              <Link
                href="/news"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                News
              </Link>
              <Link
                href="/project-of-the-month"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Project of the Month
              </Link>
            </div>
          )}
        </div>
        <a
          href="#Calendar"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Calendar
        </a>
        <a
          href="#Contact"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}

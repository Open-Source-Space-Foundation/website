"use client";

import Image from "next/image";
import Header from "../components/Header"; // relative import from projects/page.tsx
import { projects, Project } from "../data/projects";

export default function ProjectsOfTheMonth() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center px-8 py-16 space-y-12">
        <h1> Project Of the Month </h1>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center py-6 border-t border-gray-200 dark:border-gray-700 text-sm">
        © {new Date().getFullYear()} Apache Licence.
      </footer>
    </div>
  );
}

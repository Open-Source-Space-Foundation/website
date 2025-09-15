"use client";

import Image from "next/image";
import Header from "../components/Header"; // relative import from projects/page.tsx
import { projects, Project } from "../data/projects";

export default function Contribute() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main>
        <section
          id="Contact"
          className="min-h-[60vh] w-full flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl font-bold ">Contact Us</h2>

          {/* Mailing List Button */}
          <div className="mt-16">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHCDZK-fTAsLQ0wfQYYAGbmTHVZO-Q89CjqezMOO0bQAULNA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-300 text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition"
            >
              Join Our Mailing List!
            </a>
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-300"></p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 gap-8 w-full max-w-3xl">
            <div className="rounded-2xl shadow-lg p-6 dark:bg-gray-800  bg-blue-200 flex flex-col items-center">
              <h3 className="text-xl font-semibold">Michael Pham</h3>
              <h2 className="text-l font-semibold"> President </h2>
              <a
                href="mailto:michael@opensource.space"
                className="mt-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                michael@opensource.space
              </a>
            </div>
            <div className="rounded-2xl shadow-lg p-6 bg-blue-200 dark:bg-gray-800 flex flex-col items-center">
              <h3 className="text-xl font-semibold">Ines Khouider</h3>
              <h2 className="text-l font-semibold"> Secretary </h2>

              <a
                href="mailto:ines@opensource.space"
                className="mt-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                ines@opensource.space
              </a>
            </div>
            <div className="rounded-2xl shadow-lg p-6 bg-blue-200 dark:bg-gray-800 flex flex-col items-center">
              <h3 className="text-xl font-semibold">David Uniack</h3>
              <h2 className="text-l font-semibold"> CFO </h2>

              <a
                href="mailto:david@opensource.space"
                className="mt-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                david@opensource.space
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center py-6 border-t border-gray-200 dark:border-gray-700 text-sm">
        © {new Date().getFullYear()} Apache Licence.
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import Header from "../components/Header"; // relative import from projects/page.tsx
import { projects, Project } from "../data/projects";
import Link from "next/link";

export default function ProjectsOfTheMonth() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      <section
        id="Calendar"
        className="min-h-[60vh] bg-blue-100 w-full flex flex-col items-center py-20"
      >
        <h2 className="text-3xl font-bold">Calendar</h2>

        <Link
          href="https://calendar.google.com/calendar/embed?src=c_1d4a39d1945526383b2c3a9e5f48e66b14726fd3635a31110f65c30a3769a815%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600"
        >
          Add your own open source events to this calendar
        </Link>
        <div className="w-full max-w-4xl mt-8">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_1d4a39d1945526383b2c3a9e5f48e66b14726fd3635a31110f65c30a3769a815%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            style={{ border: 0 }}
            width="100%"
            height="600"
          ></iframe>
        </div>
      </section>{" "}
      {/* Footer */}
      <footer className="flex justify-center items-center py-6 border-t border-gray-200 dark:border-gray-700 text-sm">
        © {new Date().getFullYear()} Apache Licence.
      </footer>
    </div>
  );
}

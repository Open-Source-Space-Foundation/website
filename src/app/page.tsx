"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ProjectsCarousel from "./components/Carosel";
import NewsCarousel from "./components/Carosel";

export default function Home() {
  const [isCommunityOpen, setCommunityOpen] = useState(false);
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen">
      {/* ---- HEADER ---- */}
      <header className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
          <span className="font-bold text-lg">
            Open Source Space Foundation
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm sm:text-base font-medium">
          <Link
            href="/projects"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Projects
          </Link>
          <a
            href="#Contribute"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contribute
          </a>
          <a
            href="#Community"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {/* Community Dropdown */}
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
          </a>
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

      {/* ---- MAIN CONTENT ---- */}
      <main className="flex flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-4xl font-bold">Making Space Open Source</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-xl">
          Welcome to the open source space foundation! Our goal is to to promote
          and support the creation, adoption, and application of open source
          communities, platforms, technologies, and infrastructure for the
          exploration and utilization of outer space.
        </p>
        <div className="flex items-center gap-2">
          <Image
            src="/images/OS_SS_25.png"
            alt="Us at Smallsat 2025!"
            width={700}
            height={700}
          />
          <span className="font-bold text-lg"></span>
        </div>
        <section
          id="About"
          className="w-full bg-gray-100 dark:bg-gray-900 py-20 px-8"
        >
          <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
            {/* Image on the left */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/logo.png" // replace with your image path
                alt="What Do we Do?"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>

            {/* Text on the right */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">What Do We Do?</h2>
              <h3 className="text-1xl font-bold mb-4"> Provide Transparency</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Easily explore what open source space projects exist and how you
                can get involved!
              </p>
              <h3 className="text-1xl font-bold mb-4"> Create Community</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Meetups, design reviews, and chances for the community to work
                and share together
              </p>
              <h3 className="text-1xl font-bold mb-4">
                {" "}
                Providing Standards and Interoperability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Linking projects together in order to encourage use accross the
                community
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Projects
                </Link>
                <Link
                  href="/contribute"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="News"
          className="min-h-[60vh] bg-blue-100 w-full flex flex-col items-center py-20"
        >
          <Link href="/news" className="text-3xl py-10 font-bold text-blue-900">
            News
          </Link>

          <NewsCarousel></NewsCarousel>
        </section>

        <section
          id="Calendar"
          className="min-h-[60vh] bg-blue-100 w-full flex flex-col items-center py-20"
        >
          <h2 className="text-3xl font-bold">Calendar</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            View our project timeline and upcoming events.
          </p>
          <div className="w-full max-w-4xl mt-8">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=c_1d4a39d1945526383b2c3a9e5f48e66b14726fd3635a31110f65c30a3769a815%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              style={{ border: 0 }}
              width="100%"
              height="600"
            ></iframe>
          </div>
        </section>

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

      {/* ---- FOOTER ---- */}
      <footer className="row-start-3 flex justify-center items-center py-6 border-t border-gray-200 dark:border-gray-700 text-sm">
        © {new Date().getFullYear()} Apache Licence.
      </footer>
    </div>
  );
}

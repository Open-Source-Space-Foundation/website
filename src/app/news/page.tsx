"use client";

import Image from "next/image";
import Header from "../components/Header"; // relative import from projects/page.tsx
import { news_articles, News } from "../data/news";
import Link from "next/link";

export default function News_func() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center px-8 py-16 space-y-12">
        <h1 className="text-4xl font-bold text-center">News</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
          Open Source Space News!
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfsrC4BhJLthJD5QLGKX9O3h2sZ93R9jn9GOqrlSc1Eikc0iA/viewform?usp=dialog"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Sumbit your piece of opens source space news here!
        </Link>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 w-full max-w-6xl">
          {news_articles.map((project: News) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center py-6 border-t border-gray-200 dark:border-gray-700 text-sm">
        © {new Date().getFullYear()} Apache Licence.
      </footer>
    </div>
  );
}

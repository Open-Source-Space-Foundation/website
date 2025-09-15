"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { proj_contribute_list, Contributions } from "@/app/data/contribute";
import Header from "../components/Header";
import Head from "next/head";

export default function ContributePage() {
  const [search, setSearch] = useState("");

  // Build a tag frequency map
  const tagCounts: Record<string, number> = {};
  proj_contribute_list.forEach((item) => {
    item.tags.forEach((tag) => {
      const lower = tag.toLowerCase();
      tagCounts[lower] = (tagCounts[lower] || 0) + 1;
    });
  });

  // Sort tags by frequency
  const popularTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1]) // descending by count
    .slice(0, 6) // show top 6
    .map(([tag]) => tag);

  // Filter contributions
  const filteredContributions = proj_contribute_list.filter(
    (item: Contributions) =>
      item.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            Contribute to Open Source Space
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
            Here are projects that are looking for contributors.
          </p>

          {/* Search + Popular Tags */}
          <div className="flex flex-col items-center gap-4 mb-12">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search by tags (e.g. programming, ground station)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />

            {/* Popular Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearch(tag)}
                  className="text-sm bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 px-3 py-1 rounded-full transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Contributions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContributions.length > 0 ? (
              filteredContributions.map((contribution) => (
                <div
                  key={contribution.title}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
                >
                  <Image
                    src={contribution.image}
                    alt={contribution.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-2">
                      {contribution.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4">
                      {contribution.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {contribution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={contribution.link}
                      target="_blank"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-center transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-300 text-center col-span-full">
                No contributions found for "{search}".
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

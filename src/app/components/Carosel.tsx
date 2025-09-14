"use client";

import { useState } from "react";
import Image from "next/image";
import { news_articles, News } from "../data/news"; // adjust path if needed

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(news_articles.length / 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md rounded-full p-3 z-10 hover:scale-110 transition"
      >
        ◀
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {news_articles.map((news: News) => (
            <div key={news.title} className="flex-shrink-0 w-1/3 px-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl h-96">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={300}
                  height={180}
                  className="object-cover w-full h-64"
                />
                <div className="p-3 flex flex-col justify-between flex-1">
                  <h3 className="text-sm font-semibold mb-2">{news.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                    {news.description}
                  </p>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md rounded-full p-3 z-10 hover:scale-110 transition"
      >
        ▶
      </button>
    </div>
  );
}

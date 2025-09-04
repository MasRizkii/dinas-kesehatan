import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "../components/SearchBar";
import newsData from "../data/newsData"; 

export default function Hero() {
  // hanya ambil 4 berita pertama
  const carouselNews = newsData.slice(0, 4);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselNews.length]);

  const currentSlide = carouselNews[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Foto Carousel */}
      <AnimatePresence>
        <motion.img
          key={currentSlide.id}
          src={currentSlide.image}
          alt={currentSlide.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none z-0"
        />
      </AnimatePresence>

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/30 z-10"></div>

      {/* Overlay Putih di bawah */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Konten */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 mt-10">
        <span className="text-white font-bold text-lg mb-2">
          {currentSlide.date}
        </span>
        <h1
          className="text-3xl md:text-4xl font-extrabold text-white text-center mx-auto max-w-4xl"
          style={{ textShadow: "4px 4px 12px rgba(0, 0, 0, 0.85)" }}
        >
          {currentSlide.title}
        </h1>

        <div className="absolute -mb-80 w-full max-w-md">
          <SearchBar />
        </div>
      </div>

      {/* Indikator Carousel */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {carouselNews.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-[#FE4F2D] scale-155" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

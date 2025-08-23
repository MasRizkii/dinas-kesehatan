import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import puskesmasData from "../data/puskesmasData";
import PuskesmasCard from "../components/PuskesmasCard";

export default function PuskesmasUptd() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // tombol navigasi
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // lebar card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // drag pakai mouse
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // multiplier kecepatan drag
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-16 bg-white select-none">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-1">
        <h2 id="edo" className="text-4xl font-bold text-[#FE4F2D]">Puskesmas & UPTD</h2>
        <p className="text-gray-500 mt-2">
          Informasi lokasi puskesmas dan UPTD di Kota Semarang
        </p>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-8 max-w-14xl mx-auto px-6 py-10 overflow-x-auto scrollbar-hide ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ userSelect: "none" }}
      >
        {puskesmasData.map((item, i) => (
          <PuskesmasCard key={item.id} {...item} index={i} />
        ))}
      </div>

      {/* Navigasi kiri-kanan */}
      <div className="flex justify-center gap-4 mt-1">
        <button
          onClick={() => scroll("left")}
          className="p-3 bg-[#FC6D56] rounded-full hover:bg-gray-300 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 bg-[#FC6D56] rounded-full hover:bg-gray-300 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}

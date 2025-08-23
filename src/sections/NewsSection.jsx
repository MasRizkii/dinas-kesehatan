import { CalendarDays, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import newsData from "../data/newsData";
import { Link } from "react-router-dom";


export default function NewsSection() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 py-8 cursor-pointer transition">
      {/* Heading */}
      <div className="text-center z-10 mb-8 relative">
        <h2 id="edo" className="text-[#FE4F2D] text-5xl font-bold">Berita Terkini</h2>
        <p className="text-gray-800 text-2xl text-center font-semibold border-b-2 w-[400px] border-zinc-700 pb-5 mx-auto">
          Kabar Terbaru Dinas Kesehatan
        </p>
      </div>

      {/* Lingkaran Dekoratif */}
      <motion.div
        className="absolute top-70 -left-60 w-70 h-70 rounded-full bg-pink-500 opacity-80 z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-70 -left-10 w-30 h-30 rounded-full bg-blue-900 opacity-80 z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-50 -right-50 w-48 h-48 rounded-full bg-pink-500 opacity-80 z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-50 -right-20 w-30 h-30 rounded-full bg-blue-900 opacity-80 z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* News List */}
      <div className="space-y-6 animate-fadeIn relative z-10 ">
        {newsData.slice(0, 4).map((news) => (
          <div
            key={news.id}
            className="flex flex-col sm:flex-row bg-[#FDFBEE] rounded-2xl overflow-hidden
             shadow-md border border-transparent
             transform transition-all duration-300
             hover:scale-[1.02] hover:shadow-[0_0_15px_#3D74B6] hover:border-[#3D74B6]"
          >
            {/* Image w-full sm:w-1/3 aspect-[16/9] object-cover object-top */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full sm:w-1/3 aspect-[16/9] object-cover object-top"
            />
            
            {/* Content */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{news.description}</p>
              </div>

              {/* Date */}
              <div className="flex items-center mt-3 text-gray-500 text-sm">
                <CalendarDays className="w-4 h-4 mr-2" />
                {news.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 relative z-10">
        <Link
    to="/berita"
    className="flex items-center gap-2 bg-[#FE4F2D] text-white px-3 py-1 
               rounded-lg text-lg font-medium transition-all duration-300 
               hover:bg-[#e85f44] hover:scale-[1.02]"
  >
          Lihat Semua Berita
          <MoreHorizontal className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

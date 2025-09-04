import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  return (
    <Link to={`/berita/${news.id}`} className="block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row bg-[#FDFBEE] rounded-2xl overflow-hidden
             shadow-md border border-transparent
             hover:shadow-[0_0_15px_#3D74B6] hover:border-[#3D74B6]
              h-auto sm:h-44"
      >
        {/* Gambar */}
        <img
          src={news.image}
          alt={news.title}
          className="w-full sm:w-1/3 aspect-[16/9] object-cover object-top"
        />

        {/* Konten */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug line-clamp-2 sm:line-clamp-2">
              {news.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-3 sm:line-clamp-3">
              {news.content}
            </p>
          </div>

          {/* Tanggal */}
          <div className="flex items-center mt-3 text-gray-500 text-xs sm:text-sm">
            <CalendarDays className="w-4 h-4 mr-2" />
            {news.date}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

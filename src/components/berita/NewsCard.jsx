import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsCard({ news }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col sm:flex-row bg-[#FDFBEE] rounded-2xl overflow-hidden
                 shadow-md border border-transparent
                 hover:shadow-[0_0_15px_#3D74B6] hover:border-[#3D74B6]"
    >
      {/* Gambar */}
      <img
        src={news.image}
        alt={news.title}
        className="w-full sm:w-1/3 aspect-[16/9] object-cover object-top"
      />

      {/* Konten */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 leading-snug">
            {news.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2">{news.description}</p>
        </div>

        {/* Tanggal */}
        <div className="flex items-center mt-3 text-gray-500 text-sm">
          <CalendarDays className="w-4 h-4 mr-2" />
          {news.date}
        </div>
      </div>
    </motion.div>
  );
}

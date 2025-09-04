import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LayananCard({ subtitle, category, image, link }) {
  return (
    <motion.a
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // animasi jalan saat 30% card kelihatan
      className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-start 
                 transform transition-all duration-300 
                 hover:scale-[1.03] hover:shadow-xl hover:bg-gray-50 cursor-pointer"
    >
      {/* Top Section with Image + Title */}
      <div className="grid place-items-center gap-3 mb-3">
        <img src={image} alt={category} className="w-50 h-12 object-contain" />
        {subtitle && (
          <p className="text-sm text-gray-500 text-center">{subtitle}</p>
        )}
      </div>

      {/* Category */}
      <p className="text-lg font-semibold text-zinc-700">{category}</p>

      {/* Link Text */}
      <div className="flex items-center gap-1 mt-2 font-medium text-white 
                      bg-[#eb563f] hover:bg-[#f0a394] rounded-2xl px-4">
        <a href={link}>Kunjungi</a>
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.a>
  );
}

import { motion } from "framer-motion";

export default function PuskesmasCard({ img, title, alamat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition min-w-[300px] flex-shrink-0"
    >
      {/* Gambar */}
      <div className="relative group overflow-hidden">
        <img
          src={img}
          alt={title} 
          draggable={false}
          className="w-full h-56 object-cover transition duration-500 group-hover:blur-sm pointer-events-none "
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-500">
            Read More
          </button>
        </div>
      </div>

      {/* Konten */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1 break-words max-w-[250px]">
            {alamat}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </motion.div>
  );
}

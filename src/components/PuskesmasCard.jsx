import { motion } from "framer-motion";

export default function PuskesmasCard({ img, title, alamat, map, link, index }) {
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
          <a
          href={map}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-500">
            Lihat Map 
          </a>
        </div>
      </div>

      {/* Konten */}
<div className="p-5">  
  {/* Judul di atas */}
  <h3 className="text-lg font-semibold text-gray-900 mb-2">
    {title}
  </h3>

  {/* Alamat di bawah */}
  <div className="flex items-center gap-4 text-sm text-gray-500">
    <span className="flex items-center gap-1 break-words max-w-[250px]">
      {alamat}
    </span>
  </div>

  {/* Tombol Selengkapnya */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FE4F2D] text-white px-2 py-1 rounded-lg text-sm font-medium shadow hover:bg-[#e86a50] transition-colors mt-4 cursor-pointer"
        >
          Selengkapnya
        </a>
</div>

    </motion.div>
  );
}

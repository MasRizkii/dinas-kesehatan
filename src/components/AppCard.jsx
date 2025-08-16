import { FaArrowRight } from "react-icons/fa";

export default function AppCard({ title, description, img, link }) {
  return (
    <div className="relative bg-[#F9F8F4] rounded-2xl shadow-lg flex flex-col sm:flex-row items-start p-4 gap-4">
      {/* Gambar */}
      <div className="w-full sm:w-32 sm:h-32 bg-gray-300 rounded-lg flex-shrink-0 relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Konten */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-lg text-black">{title}</h3>
          <p className="text-gray-700 mt-1">{description}</p>
        </div>
        <a
          href={link}
          className="absolute bottom-4 right-4 inline-flex items-center gap-1 bg-[#E34E45] text-white text-xs px-2 py-1 rounded-lg hover:bg-[#c93d38] transition"
        >
          Selengkapnya <FaArrowRight size={10} />
        </a>
      </div>
    </div>
  );
}

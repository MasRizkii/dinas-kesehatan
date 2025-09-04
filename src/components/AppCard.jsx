import { FaArrowRight } from "react-icons/fa";

export default function AppCard({ title, description, img, link }) {
  return (
    <div className="relative bg-white rounded-3xl shadow-md flex flex-col sm:flex-row items-center sm:items-start p-4 gap-4">
      {/* Image */}
      <div className="w-full sm:w-40 flex-shrink-0 overflow-hidden rounded-lg relative group">
  <img
    src={img}
    alt={title}
    className="w-full h-32 sm:h-36 object-cover rounded-lg"
  />
  {/* Efek Glossy */}
  <div
    className="absolute inset-0 rounded-lg overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                 translate-x-[-100%] group-hover:translate-x-[100%] 
                 transition-transform duration-700 ease-in-out"
    />
  </div>
</div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-base sm:text-lg text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        {link && (
          <div className="mt-4 flex justify-end">
            <a
              href={link}
              className="inline-flex items-center gap-2 bg-[#E34E45] text-white text-xs px-5 py-1.5 rounded-lg hover:bg-[#c93d38] transition"
            >
              Selengkapnya <FaArrowRight size={12} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

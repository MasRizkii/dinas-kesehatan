import { FaArrowRight } from "react-icons/fa";

export default function AppCard({ title, description, img, link }) {
  return (
    <div className="relative bg-[#F9F8F4] rounded-2xl shadow-lg flex flex-col sm:flex-row items-start p-4 gap-4">
      {/* Image */}
      <div className="w-full sm:w-32 sm:h-32 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-lg text-black">{title}</h3>
          <p className="text-gray-700 mt-1">
            {description && description.split(" ").length > 10
              ? description.split(" ").slice(0, 10).join(" ") + "..."
              : description}
          </p>
        </div>
        {link && (
          <a
            href={link}
            className="absolute bottom-4 right-4 inline-flex items-center gap-1 bg-[#E34E45] text-white text-xs px-2 py-1 rounded-lg hover:bg-[#c93d38] transition"
          >
            Selengkapnya <FaArrowRight size={10} />
          </a>
        )}
      </div>
    </div>
  );
}

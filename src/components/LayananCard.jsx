import { ArrowRight } from "lucide-react";

export default function LayananCard({ subtitle, category, linkText, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-start transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:bg-gray-50 cursor-pointer"
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
      <div className="flex items-center gap-1 text-[#DC3C22] mt-2 font-medium">
        {linkText} <ArrowRight className="w-4 h-4" />
      </div>
    </a>
  );
}

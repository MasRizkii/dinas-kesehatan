import layananData from "../data/layananData";
import LayananCard from "../components/LayananCard";

export default function LayananDigital() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-[#FDFBEE] rounded-4xl">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-[#FE4F2D] text-4xl font-bold">Layanan Digital</h2>
        <p className="text-gray-900 text-2xl font-semibold">
          Layanan Online Dinas Kesehatan
        </p>
        <div className="w-40 h-[2px] bg-gray-400 mx-auto mt-2"></div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {layananData.map((item) => (
          <LayananCard key={item.id} {...item} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 bg-[#FE4F2D] text-white px-3 py-1 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#e85f44] hover:scale-[1.02]">
          Lihat Semua Layanan
          <img src="/more (1).png" className="w-5 h-5" alt="more" />
        </button>
      </div>
    </div>
  );
}

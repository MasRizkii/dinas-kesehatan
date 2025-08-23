import { useState } from "react";
import NewsCard from "./NewsCard";
import newsData from "../../data/newsData";

export default function NewsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // jumlah berita per halaman

  // Hitung data yang ditampilkan di halaman saat ini
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  return (
    <div className="flex-1">
      {/* List berita */}
      <div className="space-y-4">
        {currentNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md border transition
              ${
                currentPage === i + 1
                  ? "bg-[#3D74B6] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // kirim query ke parent (misal NewsSection)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-6"
    >
      <div className="flex items-center bg-gray-200 text-zinc-700 rounded-full shadow-inner px-4 py-2 w-[350px] md:w-[450px]">
        <FaSearch className="text-zinc-700 mr-3" />
        <input
          type="text"
          placeholder="Pencarian Berita...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-sm placeholder-zinc-700"
        />
        <button
          type="submit"
          className="bg-[#FE4F2D] text-white rounded-full px-4 py-1 ml-2 text-sm hover:bg-red-600 transition-colors"
        >
          Cari
        </button>
      </div>
    </form>
  );
}

import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex items-center bg-gray-200 text-zinc-700 rounded-full shadow-inner px-4 py-2 w-[350px] md:w-[450px]">
        <FaSearch className="text-zinc-700 mr-3" />
        <input
          type="text"
          placeholder="Pencarian Berita...."
          className="w-full bg-transparent focus:outline-none text-sm placeholder-zinc-700"
        />
      </div>
    </div>
  );
}

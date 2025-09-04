import newsData from "../../data/newsData";

export default function SidebarBerita() {
  return (
    <aside className="w-full sm:w-1/3 mt-6 sm:mt-0 sm:pl-6">
      {/* Search */}
      <div className="flex mb-6 text-zinc-700">
        <input
          type="text"
          placeholder="Cari berita terkini"
          className="flex-1 border rounded-l-lg px-3 py-2 text-sm focus:outline-none"
        />
        <button className="bg-red-500 text-white px-4 rounded-r-lg">Cari</button>
      </div>

      {/* Populer */}
      <h2 className="text-lg font-bold mb-4 text-zinc-700">
        Berita <span className="text-red-500">Populer</span>
      </h2>
      <div className="space-y-4">
        {newsData.slice(0, 4).map((news) => (
          <div
            key={news.id}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 h-24"
          >
            {/* Thumbnail */}
            <div className="w-28 h-full bg-gray-200 rounded overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Konten */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <a className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-red-500">
                {news.title}
              </a>
              <span className="text-xs text-gray-500">{news.date}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

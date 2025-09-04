// components/HeroBerita.jsx
import { useLocation, Link } from "react-router-dom";

export default function HeroProfil() {
  const location = useLocation();

  // Ambil path saat ini, pisahkan dengan "/"
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
      <img
        src="/public/photo-1575573685828-7c1e20f05124.jpg"
        alt="Hero Berita"
        className="w-full h-full object-cover"
      />

      {/* Gradient bawah */}
      <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Title + breadcrumb */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center space-y-4">
        {/* Title */}
        <div className="bg-gray-200 rounded-full shadow-inner px-6 py-2">
          <h1 className="text-5xl font-bold text-[#FE4F2D]">BERITA</h1>
        </div>

        {/* Breadcrumb */}
        <nav className="text-white text-sm md:text-base">
          <ol className="flex space-x-2">
            <li>
              <Link to="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return (
                <li key={to} className="flex space-x-2">
                  <span>{">"}</span>
                  {isLast ? (
                    <span className="capitalize">{value}</span>
                  ) : (
                    <Link to={to} className="hover:underline capitalize">
                      {value}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}

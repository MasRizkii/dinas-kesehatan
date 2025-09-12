import { useParams, Link, useLocation } from "react-router-dom";
import newsData from "../../data/newsData";
import Navbar from "../../components/Navbar";
import HeroBerita from "../../components/berita/HeroBerita";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function NewsDetail() {
  const { id } = useParams();
  const location = useLocation();

  // Ambil nomor halaman dari query param (?page=2)
  const params = new URLSearchParams(location.search);
  const currentPage = params.get("page") || 1;

  const newsId = parseInt(id);

  // Cari berita saat ini
  const news = newsData.find((item) => item.id === newsId);

  // Tentukan index berita sekarang
  const currentIndex = newsData.findIndex((item) => item.id === newsId);
  const prevNews = currentIndex > 0 ? newsData[currentIndex - 1] : null;
  const nextNews =
    currentIndex < newsData.length - 1 ? newsData[currentIndex + 1] : null;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  // Jika berita tidak ditemukan
  if (!news) {
    return (
      <>
        <Navbar />
        <HeroBerita />
        <div className="max-w-3xl mx-auto py-10 px-4 text-center">
          <p className="text-red-500">Berita tidak ditemukan.</p>
          <Link
            to={`/berita?page=${currentPage}`}
            className="text-blue-500 hover:underline block mt-4"
          >
            ← Kembali ke daftar berita
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <HeroBerita />

      <div className="max-w-5xl mx-auto py-10 px-4 cursor-pointer">
        {/* Gambar */}
        <img
          src={news.image}
          alt={news.title}
          className="w-full max-h-[700px] object-top rounded-lg shadow mb-4"
        />

        {/* Judul */}
        <h1 className="text-2xl font-bold mb-2 text-zinc-700">{news.title}</h1>

        {/* Tanggal + Like */}
        <div className="flex items-center gap-3 mb-4">
          <p className="text-sm text-gray-500">{news.date}</p>
          <button
            onClick={toggleLike}
            className="flex items-center gap-1 text-sm focus:outline-none"
          >
            <Heart
              className={`w-5 h-5 transition-colors duration-300 ${
                liked ? "fill-red-500 text-red-500" : "text-gray-500"
              }`}
            />
          </button>
          <span className="text-xs text-gray-600">{likeCount}</span>
        </div>

        {/* Konten */}
        <p className="items-center mx-auto text-gray-700 leading-relaxed max-w-2xl text-justify">
          {news.content}
        </p>

        {/* Navigasi Bawah */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {prevNews && (
            <Link
              to={`/berita/${prevNews.id}?page=${currentPage}`}
              className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300 transition-colors"
            >
              ← {prevNews.title.slice(0, 15)}...
            </Link>
          )}

          <Link
            to={`/berita?page=${currentPage}`}
            className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-300 transition-colors"
          >
            Kembali ke daftar berita
          </Link>

          {nextNews && (
            <Link
              to={`/berita/${nextNews.id}?page=${currentPage}`}
              className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-300 transition-colors"
            >
              {nextNews.title.slice(0, 15)}... →
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

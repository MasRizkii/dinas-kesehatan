import { useParams, Link } from "react-router-dom";
import newsData from "../../data/newsData";
import Navbar from "../../components/Navbar";
import HeroBerita from "../../components/berita/HeroBerita";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === parseInt(id));

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

  if (!news) {
    return (
      <>
        <Navbar />
        <HeroBerita />
        <div className="max-w-3xl mx-auto py-10 px-4 text-center">
          <p className="text-red-500">Berita tidak ditemukan.</p>
          <Link to="/berita" className="text-blue-500 hover:underline block mt-4">
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
        <img
          src={news.image}
          alt={news.title}
          className="w-270 max-h-[700px] object-top rounded-lg shadow mb-4"
        />
        <h1 className="text-2xl font-bold mb-2 text-zinc-700">{news.title}</h1>

        {/* Date + Like */}
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

        {/* Content */}
        <p className="text-gray-700 leading-relaxed text-justify">{news.content}</p>

        <div className="flex justify-center px-4 py-2">
          <Link
            to="/berita"
            className="flex justify-center items-center mt-7
             text-center text-white bg-red-400 
             hover:bg-red-300 transition-colors duration-300 
             rounded-lg px-4 py-2 w-auto cursor-pointer"
          >
            ← Kembali ke daftar berita
          </Link>
        </div>
      </div>
    </>
  );
}

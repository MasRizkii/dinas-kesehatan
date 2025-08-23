export default function HeroBerita() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
      <img
        src="/public/photo-1575573685828-7c1e20f05124.jpg" // ganti dengan gambar hero berita
        alt="Hero Berita"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-white to-transparent z-10" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className=" text-5xl font-bold text-[#FE4F2D] ">BERITA</h1>
      </div>
    </div>
  );
}

export default function FooterCopyright() {
  return (
    <div className="relative z-10 text-center text-sm text-black bg-white bg-opacity-80 py-2 mt-5">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/logo_pemkot_semarang.png"
          alt="Logo Pemkot"
          className="h-5 w-auto"
        />
        <span>©2018–2025 Dinas Kesehatan Kota Semarang</span>
      </div>
    </div>
  );
}

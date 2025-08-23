import HeroBerita from "../../components/berita/HeroBerita";
import NewsList from "../../components/berita/NewsList";
import SidebarBerita from "../../components/berita/SidebarBerita";
import Navbar from "../../components/Navbar";

export default function BeritaPage() {
  return (
    <div className="cursor-pointer">
      <Navbar />
      <HeroBerita />

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row gap-6">
        {/* List berita */}
        <NewsList />

        {/* Sidebar */}
        <SidebarBerita />
      </div>
    </div>
  );
}

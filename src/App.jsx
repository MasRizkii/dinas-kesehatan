import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import BeritaPage from "./page/berita/Berita";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/berita" element={<BeritaPage />} />
      </Routes>

      <Footer />
    </>
  );
}

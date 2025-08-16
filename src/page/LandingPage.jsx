// pages/LandingPage.jsx
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import NewsSection from "../sections/NewsSection";
import AppCard from "../components/AppCard";
import AppSection from "../sections/AppSection";
import LayananDigital from "../sections/LayananDigital";
import PuskesmasUptd from "../sections/PuskesmasUptd";
{/*import Header from "../components/Header";
import Berita1 from "../components/Berita1";
import Aplikasi from "../components/Aplikasi";
import LayananDigital from "../components/LayananDigital";
import PuskesmasUptd from "../components/PuskesmasUptd";
import Footer from "../components/Footer";*/}

export default function LandingPage() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <NewsSection />
      <AppSection />
      <LayananDigital />
      <PuskesmasUptd />
      {/*<Header />
      <Berita1 />
      <Aplikasi />
      <LayananDigital />
      <PuskesmasUptd />
      <Footer />*/}
    </div>
  );
}

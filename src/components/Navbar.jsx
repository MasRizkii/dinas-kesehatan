// components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <motion.nav
        animate={{
          width: isScrolled ? "90%" : "100%",
          borderRadius: isScrolled ? "1.5rem" : "0rem",
          top: isScrolled ? "20px" : "0px",
        }}
        transition={{ duration: 0.4 }}
        className="fixed left-1/2 transform -translate-x-1/2 z-50 bg-white/60 backdrop-blur-md overflow-visible px-6 py-3 flex justify-between items-center shadow-lg"
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo_pemkot_semarang.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-sm md:text-base font-semibold text-gray-800 leading-4">
            DINAS KESEHATAN <br />
            KOTA SEMARANG
          </span>
        </div>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800 cursor-pointer transition">
          <li className="hover:text-blue-600 transition">Profil</li>
          <li className="relative">
            <div
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition"
            >
              Informasi & Layanan
              <svg
                className="w-4 h-4 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            <ul
              className={`absolute top-8 left-0 bg-white/80 backdrop-blur-md rounded shadow-md py-2 px-4 space-y-2 min-w-[220px] max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li className="hover:text-blue-600 cursor-pointer transition">Profil Kesehatan</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Pelayanan Puskesmas</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Pelayanan Laboratorium Kesehatan</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Pelayanan Ambulan Hebat</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Pelayanan Rekomendasi Perijinan Sarana Kesehatan</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Informasi Serta Merta</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Pelayanan Perijinan Tenaga Kesehatan</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Layanan PIRT</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Pengaduan Masyarakat</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Layanan Vaksinasi COVID-19</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Pelayanan UHC (Universal Health Coverage)</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Cek Kesehatan Gratis (CKG)</li>
            </ul>
          </li>
          <li className="hover:text-blue-600 transition">PPID</li>
          <li className="hover:text-blue-600 transition">WBS</li>
        </ul>
      </motion.nav>
    </motion.header>
  );
}

// components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deteksi klik di luar dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🔑 styling untuk link aktif
  const linkClass = `relative mt-4 lg:inline-block lg:mt-0 px-4 py-2 font-bold text-zinc-700
                     after:content-[''] after:absolute after:left-0 after:bottom-0
                     after:h-[2px] after:bg-[#3D74B6]
                     after:transition-all after:duration-300
                     hover:text-[#3D74B6] hover:after:w-full`;

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <motion.div
        animate={{
          width: isScrolled ? "90%" : "100%",
          borderRadius: isScrolled ? "1.5rem" : "0rem",
          top: isScrolled ? "20px" : "0px",
        }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between flex-wrap bg-white/60 backdrop-blur-md py-4 lg:px-12 shadow border-solid fixed left-1/2 transform -translate-x-1/2"
      >
        {/* Logo */}
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0 cursor-pointer">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
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

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="block lg:hidden flex items-center px-3 py-2 border-2 rounded text-zinc-700 border-[#3D74B6] hover:text-[#3D74B6] hover:border-[#3D74B6]"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div
          className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 transition-all duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-center flex-grow text-md font-bold text-zinc-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "text-[#3D74B6] after:w-full" : "after:w-0"}`
              }
            >
              Beranda
            </NavLink>

            <NavLink
              to="/berita"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "text-[#3D74B6] after:w-full" : "after:w-0"}`
              }
            >
              Berita
            </NavLink>

            <NavLink
              to="/profil"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "text-[#3D74B6] after:w-full" : "after:w-0"}`
              }
            >
              Profil
            </NavLink>

            {/* Dropdown */}
            <div className="relative inline-block mr-2" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className={`${linkClass}`}
              >
                Layanan Publik
              </button>
              <ul
                className={`absolute bg-white/90 backdrop-blur-md rounded shadow-md py-2 px-4 grid grid-cols-2 gap-x-6 gap-y-2 min-w-[400px] transition-all duration-300 ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Profil Kesehatan
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Pelayanan Puskesmas
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Pelayanan Laboratorium Kesehatan
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Pelayanan Ambulan Hebat
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Pelayanan Rekomendasi Perijinan Sarana Kesehatan
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Informasi Serta Merta
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Layanan PIRT
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Pengaduan Masyarakat
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Layanan Vaksinasi
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Pelayanan UHC (Universal Health Coverage)
                </li>
                <li className="hover:text-[#3D74B6] cursor-pointer">
                  Cek Kesehatan Gratis
                </li>
              </ul>
            </div>

            <NavLink
              to="https://dinkes.semarangkota.go.id/ppid"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "text-[#3D74B6] after:w-full" : "after:w-0"}`
              }
            >
              PPID
            </NavLink>

            <NavLink
              to="https://dinkes.semarangkota.go.id/wbs"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "text-[#3D74B6] after:w-full" : "after:w-0"}`
              }
            >
              WBS
            </NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="flex justify-center lg:justify-end">
            
            <NavLink
              to="/login"
              className="block text-md px-4 ml-2 py-2 rounded text-[#3D74B6] font-bold underline-offset-4 hover:underline hover:text-[#3D74B6] mt-4 lg:mt-0"
            >
              Login
            </NavLink>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}

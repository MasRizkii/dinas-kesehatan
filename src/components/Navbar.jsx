import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLayananSidebarOpen, setLayananSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setLayananSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = `relative inline-block mt-4 lg:mt-0 px-4 py-2 font-bold text-zinc-700
                     after:content-[''] after:absolute after:left-0 after:bottom-0
                     after:h-[2px] after:bg-[#3D74B6] after:w-0
                     after:transition-all after:duration-300
                     hover:text-[#3D74B6] hover:after:w-full`;

  // daftar menu layanan publik
  const layananPublikItems = [
    "Profil Kesehatan",
    "Pelayanan Puskesmas",
    "Pelayanan Laboratorium Kesehatan",
    "Pelayanan Ambulan Hebat",
    "Pelayanan Rekomendasi Perijinan Sarana Kesehatan",
    "Informasi Serta Merta",
    "Pelayanan Perijinan Tenaga Kesehatan",
    "Layanan PIRT",
    "Pengaduan Masyarakat",
    "Layanan Vaksinasi COVID-19",
    "Pelayanan UHC (Universal Health Coverage)",
    "Cek Kesehatan Gratis (CKG)",
  ];

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
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between bg-white/60 backdrop-blur-md py-4 lg:px-12 shadow fixed left-1/2 transform -translate-x-1/2 w-full lg:w-auto"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 cursor-default">
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-[#3D74B6] after:w-full" : ""}`
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/berita"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-[#3D74B6] after:w-full" : ""}`
            }
          >
            Berita
          </NavLink>
          <NavLink
            to="/profil"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-[#3D74B6] after:w-full" : ""}`
            }
          >
            Profil
          </NavLink>
          {/* Dropdown Desktop */}
          <div className="relative group">
            <button className={linkClass}>Layanan Publik</button>
            <div className="absolute text-black bg-white/95 backdrop-blur-md rounded shadow-md py-4 px-6 grid grid-cols-1 gap-y-2 min-w-[320px] hidden group-hover:grid">
              {layananPublikItems.map((item, idx) => (
                <span
                  key={idx}
                  className="hover:text-[#3D74B6] cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <NavLink
            to="https://dinkes.semarangkota.go.id/ppid"
            className={linkClass}
          >
            PPID
          </NavLink>
          <NavLink
            to="https://dinkes.semarangkota.go.id/wbs"
            className={linkClass}
          >
            WBS
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden px-6 cursor-pointer hover:scale-[1.03]">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FaTimes size={20} className="text-[#3D74B6] hover:scale-[1.3] cursor-pointer" />
            ) : (
              <FaBars size={20} className="text-[#3D74B6] hover:scale-[1.3] cursor-pointer" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Sidebar Utama */}
      <AnimatePresence>
        {isMobileMenuOpen && !isLayananSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-40 flex flex-col p-6"
            >
              <NavLink to="/" className="py-2 font-bold text-gray-700 hover:text-[#3D74B6]">
                Beranda
              </NavLink>
              <NavLink to="/berita" className="py-2 font-bold text-gray-700 hover:text-[#3D74B6]">
                Berita
              </NavLink>
              <NavLink to="/profil" className="py-2 font-bold text-gray-700 hover:text-[#3D74B6]">
                Profil
              </NavLink>
              <button
  onClick={() => setLayananSidebarOpen(true)}
  className="py-2 font-bold text-gray-700 hover:text-[#3D74B6] text-left flex items-center gap-2"
>
  <span>Layanan Publik</span>
</button>

              <NavLink to="https://dinkes.semarangkota.go.id/ppid" className="py-2 font-bold text-gray-700 hover:text-[#3D74B6]">
                PPID
              </NavLink>
              <NavLink to="https://dinkes.semarangkota.go.id/wbs" className="py-2 font-bold text-gray-700 hover:text-[#3D74B6]">
                WBS
              </NavLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sidebar Layanan Publik (Mobile) */}
      <AnimatePresence>
        {isLayananSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setLayananSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 flex flex-col p-6 overflow-y-auto"
            >
              <button
  onClick={() => setLayananSidebarOpen(false)}
  className="mb-4 flex items-center gap-2 font-bold text-gray-700"
>
  <motion.img
    src="/close.svg"
    alt="Kembali"
    className="h-6 w-6 object-contain cursor-pointer"
    whileHover={{ scale: 1.2 }}
  />
</button>
              {layananPublikItems.map((item, idx) => (
                <span
                  key={idx}
                  className="py-2 text-gray-700 font-semibold hover:text-[#3D74B6] cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

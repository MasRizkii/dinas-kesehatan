// pages/VisiMisi.jsx
import VisiSection from "../../components/profil/VisiSection";
import MisiSection from "../../components/profil/MisiSection";
import Navbar from "../../components/Navbar";
import HeroProfil from "../../components/profil/HeroProfil";
import { motion } from "framer-motion";

// pages/VisiMisi.jsx
export default function VisiMisi() {
  return (
    <div>
      <Navbar />
      <HeroProfil />

      <div className="w-full flex flex-col items-center px-4 md:px-12 py-10">
        {/* Bagian Atas: Visi + Foto */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center bg-red-500 rounded-4xl">
          {/* Visi */}
          <VisiSection />

          {/* Foto */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/5.png"
              alt="Walikota"
              className="w-64 md:w-80 object-contain"
            />
          </motion.div>
        </div>

        {/* Bagian Bawah: Misi */}
        <div className="w-full -mt-15">
        <MisiSection />
        </div>
      </div>
    </div>
  );
}

// components/profil/VisiSection.jsx
import { motion } from "framer-motion";

export default function VisiSection() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-full text-white p-4 flex flex-col justify-center"
    >
      <h2 className="text-2xl md:text-4xl font-extrabold mt-4">VISI</h2>
      <p className="text-lg md:text-3xl font-semibold leading-relaxed">
        "Kota Semarang Menjadi Pusat Ekonomi <br />
        yang Maju, Berkeadilan Sosial, Lestari <br />
        dan Inklusif"
      </p>
    </motion.div>
  );
}

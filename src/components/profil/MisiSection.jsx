// components/MisiSection.jsx
import { motion } from "framer-motion";

export default function MisiSection() {
  // Variants untuk container (atur stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay antar anak
      },
    },
  };

  // Variants untuk tiap item (misi)
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const misiList = [
    "Mewujudkan pemerataan pendidikan dan kesejahteraan sosial masyarakat yang sehat dan berbudaya dalam semangat kebersamaan, menuju peningkatan pembangunan manusia yang produktif, berkualitas dan berdaya saing.",
    "Mewujudkan infrastruktur wilayah untuk mempercepat akses dan kebutuhan individu dengan mengutamakan aspek keselamatan, kenyamanan, keamanan, serta kelestarian lingkungan hidup.",
    "Mewujudkan pemerintahan inovatif melalui pelayanan digital dengan prinsip pemerintahan terbuka dan kepemimpinan kolaboratif untuk meningkatkan daya saing daerah dengan tata kelola pemerintahan yang bersih, transparan, akuntabel dan partisipatif.",
    "Mewujudkan ekonomi kerakyatan yang kokoh, berdaya saing, berlandaskan potensi unggulan lokal, penguatan UMKM dan investasi berkelanjutan.",
    "Mewujudkan pengelolaan sumber daya alam dan lingkungan hidup secara berkelanjutan dengan meningkatkan kualitas lingkungan hidup dan ketahanan bencana, melalui pengendalian pencemaran, konservasi energi dan air, serta pemanfaatan energi terbarukan.",
    "Mewujudkan stabilitas daerah yang kondusif melalui kehidupan masyarakat yang harmonis, berlandaskan pada keimanan, ketakwaan, serta tegaknya supremasi hukum dan hak asasi manusia dengan menjunjung tinggi nilai budaya bangsa.",
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
       viewport={{ once: true, amount: 0.3 }} // 👈 jalan kalau 20% kelihatan
      className="w-full flex flex-col items-center mt-10"
    >
      {/* Label Misi */}
      <div className="relative bg-zinc-700 px-8 py-2 rounded-full text-xl font-bold shadow z-20">
        MISI
      </div>

      {/* Box Misi */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="-mt-8 bg-[#FDFBEE] shadow-2xl rounded-2xl p-6 md:p-10 w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 z-10"
      >
        {misiList.map((misi, idx) => (
          <motion.p key={idx} variants={itemVariants}>
            {misi}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}

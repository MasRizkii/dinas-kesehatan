import { motion } from "framer-motion";
import apps from "../data/appsData";
import AppCard from "../components/AppCard";

export default function AppSection() {
  return (
    <section className="relative bg-[#3D74B6] py-10 px-4 mt-10 mb-10 select-none">
      {/* Background Icon Transparan */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-between opacity-20 pointer-events-none">
        <div className="flex flex-col gap-6 mt-10 ml-4">
          <div className="w-16 h-16 bg-white/70 rounded-lg rotate-45"></div>
          <div className="w-16 h-16 bg-white/70 rounded-lg rotate-45"></div>
        </div>
        <div className="flex flex-col gap-6 mt-5 ml-4 translate-x-120 translate-y-15">
          <div className="w-16 h-16 bg-white/70 rounded-lg rotate-45"></div>
          <div className="w-16 h-16 bg-white/70 rounded-lg rotate-45"></div>
        </div>
        
        <div className="flex flex-col gap-6 mt-10 mr-4">
          <div className="w-16 h-16 bg-white/70 rounded-lg rotate-45"></div>
          <div className="w-16 h-16 bg-white/70 rounded-lg rotate-45"></div>
        </div>
        
      </div>

      {/* Title Section */}
      <div className="relative text-center mb-12">
        <span className="bg-white text-[#E34E45] px-6 py-2 rounded-lg font-bold text-lg shadow-md">
          APLIKASI KAMI
        </span>
      </div>

      {/* Card List */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {apps.map((app, i) => (
          <motion.div
            key={i}
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <AppCard {...app} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

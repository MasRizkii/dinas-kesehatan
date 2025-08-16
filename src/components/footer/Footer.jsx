import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterLocation from "./FooterLocation";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer
      className="relative text-white flex flex-col justify-between min-h-[70vh]"
      style={{
        backgroundImage: "url('/foto gedung dkk.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Konten */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        <FooterLinks />
        <FooterContact />
        <FooterLocation />
      </div>

      {/* Copyright */}
      <FooterCopyright />
    </footer>
  );
}

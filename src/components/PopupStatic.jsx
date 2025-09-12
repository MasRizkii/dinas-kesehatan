import React, { useEffect, useState } from "react";
import { popupStaticData } from "../data/popupStatic";

const PopupStatic = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Selalu tampil saat halaman dimuat
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-52 right-4 w-22 animate-slide-in z-50"
      style={{ animation: "slide-in 0.4s ease-out" }}
    >
      {/* Gambar langsung tanpa background abu-abu */}
      <img
        src={popupStaticData.image}
        alt="Static Popup"
        className="w-full h-auto object-contain"
      />

      {/* Animasi slide-in */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PopupStatic;

import React, { useEffect, useState } from "react";
import { popupData } from "../data/popup";

const Popup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => setVisible(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setVisible(false);

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".popup-container")) {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 pointer-events-none"
    >
      {/* Area klik luar */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Popup - gunakan fixed agar tetap di kanan bawah */}
      <div
        className="fixed bottom-4 right-4 w-64 bg-gray-200 rounded-xl shadow-2xl animate-slide-in flex flex-col items-center p-2"
        style={{ animation: "slide-in 0.4s ease-out" }}
      >
        {/* Tombol X */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-900 text-sm shadow"
        >
          ✕
        </button>

        {/* Container gambar */}
        <div className="bg-white rounded-lg overflow-hidden w-full shadow">
          <img
            src={popupData.image}
            alt="Popup"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Animasi slide-in dari kanan */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Popup;

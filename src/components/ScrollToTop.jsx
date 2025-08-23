import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ganti "auto" kalau mau langsung tanpa animasi
    });
  }, [pathname]);

  return null;
}

// components/FooterLinks.jsx
import { NavLink } from "react-router-dom";

export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-3">Quick Link</h3>
      <ul className="space-y-2">
        <li>
          &gt;{" "}
          <NavLink
            to="/profil"
            className="hover:underline hover:text-[#3D74B6]"
          >
            Profil
          </NavLink>
        </li>
        <li>
          &gt;{" "}
          <NavLink
            to="/layanan" // kamu bisa buat route khusus Layanan Publik
            className="hover:underline hover:text-[#3D74B6]"
          >
            Informasi dan layanan
          </NavLink>
        </li>
        <li>
          &gt;{" "}
          <a
            href="https://dinkes.semarangkota.go.id/ppid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#3D74B6]"
          >
            PPID
          </a>
        </li>
        <li>
          &gt;{" "}
          <a
            href="https://dinkes.semarangkota.go.id/wbs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#3D74B6]"
          >
            WBS
          </a>
        </li>
      </ul>
    </div>
  );
}

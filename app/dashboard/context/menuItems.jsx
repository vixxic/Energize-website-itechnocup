import {
  IoHomeOutline,
  IoTimerOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiMedal } from "react-icons/ci";

export const items = [
  {
    key: "dashboard",
    label: (
      <div className="bottom-menu-item">
        <IoHomeOutline />
        Dashboard
      </div>
    ),
  },
  {
    key: "analisis",
    label: (
      <div className="bottom-menu-item">
        <TbBrandGoogleAnalytics />
        Analisis
      </div>
    ),
  },
  {
    key: "tantangan",
    label: (
      <div className="bottom-menu-item">
        <CiMedal />
        tantangan
      </div>
    ),
  },
  {
    key: "riwayat",
    label: (
      <div className="bottom-menu-item">
        <IoTimerOutline />
        riwayat
      </div>
    ),
  },
  {
    key: "profil",
    label: (
      <div className="bottom-menu-item">
        <IoPersonOutline />
        profil
      </div>
    ),
  },
];

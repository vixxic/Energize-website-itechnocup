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
      <div>
        <IoHomeOutline />
        Dashboard
      </div>
    ),
  },
  {
    key: "analisis",
    label: (
      <div>
        <TbBrandGoogleAnalytics />
        Analisis
      </div>
    ),
  },
  {
    key: "tantangan",
    label: (
      <div>
        <CiMedal />
        tantangan
      </div>
    ),
  },
  {
    key: "riwayat",
    label: (
      <div>
        <IoTimerOutline />
        riwayat
      </div>
    ),
  },
  {
    key: "profil",
    label: (
      <div>
        <IoPersonOutline />
        profil
      </div>
    ),
  },
];

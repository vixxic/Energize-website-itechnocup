import "./FormInputData.css";
import { useState } from "react";

import { FaDesktop } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import { FiChevronDown, FiMinus, FiPlus } from "react-icons/fi";

export default function FormInputData() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="formContainer">
      <h2 className="title">Tambah Perangkat Listrik</h2>

      <p className="subtitle">
        Isi informasi perangkat yang Anda gunakan
      </p>

      {/* Device */}
      <div className="formGroup">
        <label>Device Name</label>

        <div className="inputIcon">
          <input
            type="text"
            placeholder="Contoh: AC, Kulkas, TV LED"
          />

          <FaDesktop className="icon" />
        </div>
      </div>

      {/* Quantity */}
      <div className="formGroup">
        <label>Quantity</label>

        <div className="quantityInput">
          <input
            type="number"
            value={quantity}
            readOnly
          />

          <div className="counter">
            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
            >
              <FiMinus />
            </button>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>

      {/* Power */}
      <div className="formGroup">
        <label>Power (Watt)</label>

        <div className="selectWrapper">
          <select>
            <option>
              Pilih atau masukkan daya perangkat
            </option>

            <option>60 Watt</option>
            <option>100 Watt</option>
            <option>250 Watt</option>
            <option>450 Watt</option>
            <option>900 Watt</option>
          </select>

          <FiChevronDown className="icon" />
        </div>
      </div>

      {/* Checkbox */}
      <div className="checkbox">
        <input
          type="checkbox"
          id="cek"
        />

        <label htmlFor="cek">
          Saya tidak tahu daya perangkat ini
        </label>
      </div>

      {/* Info */}
      <div className="infoCard">
        <HiOutlineLightBulb className="lamp" />

        <div>
          <h4>Estimasi Daya</h4>

          <p>
            Kami akan memberikan estimasi daya
            berdasarkan jenis perangkat yang
            dipilih.
          </p>
        </div>
      </div>

      {/* Usage */}
      <div className="formGroup">
        <label>
          Usage Duration (hours/day)
        </label>

        <div className="inputIcon">
          <input
            type="number"
            placeholder="Contoh: 5"
          />

          <LuClock3 className="icon" />
        </div>
      </div>

      <button className="addButton">
        <FiPlus />
        Tambah ke Daftar
      </button>
    </div>
  );
}
import "./FormInputData.css";
import { useState } from "react";

import { FaDesktop } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import { FiChevronDown, FiMinus, FiPlus } from "react-icons/fi";

export default function FormInputData() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="analisis-page">
      <div>
        <div className="formContainer">
          <h2 className="title">Tambah Perangkat Listrik</h2>

          <p className="subtitle">Isi informasi perangkat yang Anda gunakan</p>

          {/* Device */}
          <div className="formGroup">
            <label>Device Name</label>

            <div className="inputIcon">
              <input type="text" placeholder="Contoh: AC, Kulkas, TV LED" />

              <FaDesktop className="icon" />
            </div>
          </div>

          {/* Quantity */}
          <div className="formGroup">
            <label>Quantity</label>

            <div className="quantityInput">
              <input type="number" value={quantity} readOnly />

              <div className="counter">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <FiMinus />
                </button>

                <button onClick={() => setQuantity(quantity + 1)}>
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
                <option>Pilih atau masukkan daya perangkat</option>

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
            <input type="checkbox" id="cek" />

            <label htmlFor="cek">Saya tidak tahu daya perangkat ini</label>
          </div>

          {/* Info */}
          <div className="infoCard">
            <HiOutlineLightBulb className="lamp" />

            <div>
              <h4>Estimasi Daya</h4>

              <p>
                Kami akan memberikan estimasi daya berdasarkan jenis perangkat
                yang dipilih.
              </p>
            </div>
          </div>

          {/* Usage */}
          <div className="formGroup">
            <label>Usage Duration (hours/day)</label>

            <div className="inputIcon">
              <input type="number" placeholder="Contoh: 5" />

              <LuClock3 className="icon" />
            </div>
          </div>

          <button className="addButton purple-btn">
            <FiPlus />
            Tambah ke Daftar
          </button>
        </div>
      </div>

      <div className="device-list-container">
        <div className="device-list-header">
          <h2>Daftar Perangkat</h2>
          <p>Perangkat yang telah Anda tambahkan</p>
        </div>

        <div className="device-list">
          <div className="device-card">
            <div className="device-info">
              <img src="/assets/ac.png" alt="" />

              <div>
                <h3>AC</h3>
                <p>1 unit • 800 W • 8 jam/hari</p>
              </div>
            </div>

            <div className="device-actions">
              <button>✏️</button>
              <button>🗑️</button>
            </div>
          </div>

          <div className="device-card">
            <div className="device-info">
              <img src="/assets/fridge.png" alt="" />

              <div>
                <h3>Kulkas</h3>
                <p>1 unit • 150 W • 24 jam/hari</p>
              </div>
            </div>

            <div className="device-actions">
              <button>✏️</button>
              <button>🗑️</button>
            </div>
          </div>

          <div className="device-card">
            <div className="device-info">
              <img src="/assets/tv.png" alt="" />

              <div>
                <h3>TV LED</h3>
                <p>1 unit • 100 W • 5 jam/hari</p>
              </div>
            </div>

            <div className="device-actions">
              <button>✏️</button>
              <button>🗑️</button>
            </div>
          </div>

          <div className="device-card">
            <div className="device-info">
              <img src="/assets/washing-machine.png" alt="" />

              <div>
                <h3>Mesin Cuci</h3>
                <p>1 unit • 400 W • 1 jam/hari</p>
              </div>
            </div>

            <div className="device-actions">
              <button>✏️</button>
              <button>🗑️</button>
            </div>
          </div>

          <div className="device-card">
            <div className="device-info">
              <img src="/assets/rice-cooker.png" alt="" />

              <div>
                <h3>Rice Cooker</h3>
                <p>1 unit • 350 W • 1 jam/hari</p>
              </div>
            </div>

            <div className="device-actions">
              <button>✏️</button>
              <button>🗑️</button>
            </div>
          </div>
        </div>
      </div>

      <div className="start-analisis-button-con">
        <div>
          <p>Siap untuk analisis energi anda?</p>

          <p>
            Pastikan semua data sudah diisi dengan benar untuk hasil yang
            optimal
          </p>
        </div>

        <button className="to-analisis-btn purple-btn">
          Lanjutkan ke Analisis →
        </button>
      </div>
    </div>
  );
}

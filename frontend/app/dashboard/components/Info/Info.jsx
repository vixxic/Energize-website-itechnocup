import "./Info.css";
import {
  FaTrophy,
  FaStar,
  FaFire,
  FaSnowflake,
  FaGift,
  FaClock,
  FaLeaf,
  FaWallet,
  FaBolt,
  FaMedal,
  FaRobot,
  FaChevronRight,
} from "react-icons/fa";
import { BsBullseye } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Info() {
  return (
    <section className="challengePage">
      <div className="challengeHeader">
        <h1>Tantangan</h1>
        <p>
          Selesaikan tantangan hemat energi dan dapatkan poin untuk membentuk
          kebiasaan hemat listrik setiap hari.
        </p>
      </div>

      {/* ================= TOP CARD ================= */}

      <div className="topCard">
        <div className="topItem">
          <div className="topIcon trophy">
            <FaTrophy />
          </div>

          <div>
            <p className="topLabel">Skor Efisiensi Anda</p>

            <div className="scoreNumber">
              <h2>78</h2>
              <span>/100</span>

              <div className="goodBadge">Baik</div>
            </div>

            <small>3 dari 5 tantangan selesai</small>
          </div>
        </div>

        <div className="line"></div>

        <div className="progressSection">
          <p className="topLabel">Progress Minggu Ini</p>

          <div className="progressBar">
            <div className="progressFill"></div>
          </div>

          <div className="progressBottom">
            <small>3 dari 5 tantangan selesai</small>

            <span>60%</span>
          </div>
        </div>

        <div className="line"></div>

        <div className="topItem">
          <div className="topIcon">
            <FaStar />
          </div>

          <div>
            <p className="topLabel">Poin Anda</p>

            <h3>1.250</h3>

            <small>poin</small>
          </div>
        </div>

        <div className="line"></div>

        <div className="topItem">
          <div className="topIcon fire">
            <FaFire />
          </div>

          <div>
            <p className="topLabel">Level Anda</p>

            <h3>Level 3</h3>

            <small>Pemula</small>
          </div>
        </div>
      </div>

      {/* ================= GRID ================= */}

      <div className="challengeGrid">
        {/* LEFT */}

        <div className="activeCard">
          <h3>Tantangan Aktif</h3>

          <div className="acBox">
            <div className="acImage">
              <FaSnowflake />
            </div>

            <div className="acContent">
              <div className="titleRow">
                <h4>Kurangi Penggunaan AC</h4>

                <span>Mudah</span>
              </div>

              <p>
                Gunakan AC maksimal 8 jam per hari selama 7 hari berturut-turut.
              </p>
            </div>
          </div>

          <div className="detailList">
            <div>
              <FaClock />
              <span>Durasi Tantangan</span>
              <b>7 hari</b>
            </div>

            <div>
              <FaGift />
              <span>Hadiah</span>
              <b>100 poin</b>
            </div>

            <div>
              <BsBullseye />
              <span>Target</span>
              <b>≤ 8 jam/hari</b>
            </div>

            <div>
              <IoCheckmarkCircleOutline />
              <span>Status</span>
              <b className="purple">Berlangsung</b>
            </div>
          </div>

          <div className="progressTitle">
            <span>Progress Anda</span>

            <b>60%</b>
          </div>

          <div className="progressBar light">
            <div className="progressFill"></div>
          </div>

          <small>4 dari 7 hari</small>

          <button>
            Lihat Detail Tantangan
            <FaChevronRight />
          </button>
        </div>

        {/* MIDDLE */}

        <div className="aiCard">
          <h3>Rekomendasi AI</h3>

          <p>
            Berikut tips hemat energi yang bisa membantu Anda menyelesaikan
            tantangan ini.
          </p>

          <div className="aiItem">
            <FaRobot />
            <div>
              <b>Atur suhu AC di 24°C</b>
              <small>Suhu ideal yang tetap nyaman dan hemat energi.</small>
            </div>
          </div>

          <div className="aiItem">
            <FaRobot />
            <div>
              <b>Gunakan kipas angin</b>
              <small>
                Gunakan kipas selama 2 jam untuk mengurangi penggunaan AC.
              </small>
            </div>
          </div>

          <div className="aiItem">
            <FaRobot />
            <div>
              <b>Tutup pintu dan jendela</b>
              <small>Pastikan ruangan tertutup saat AC dinyalakan.</small>
            </div>
          </div>

          <div className="aiItem">
            <FaRobot />
            <div>
              <b>Gunakan mode hemat energi</b>
              <small>
                Aktifkan eco mode agar konsumsi listrik lebih rendah.
              </small>
            </div>
          </div>

          <div className="tipsBox">
            💡 Tips ini dihasilkan AI berdasarkan pola penggunaan listrik di
            rumah Anda.
          </div>
        </div>

        {/* RIGHT */}

        <div className="rightColumn">
          <div className="impactCard">
            <h3>Dampak Jika Berhasil</h3>

            <div className="impact green">
              <FaBolt />
              <div>
                <b>18 kWh</b>
                <span>Energi Dihemat / minggu</span>
              </div>
            </div>

            <div className="impact yellow">
              <FaWallet />
              <div>
                <b>Rp 45.000</b>
                <span>Biaya Dihemat / minggu</span>
              </div>
            </div>

            <div className="impact green">
              <FaLeaf />
              <div>
                <b>10 kg</b>
                <span>Emisi CO₂ Berkurang / minggu</span>
              </div>
            </div>
          </div>

          <div className="badgeCard">
            <div className="badgeHeader">
              <h3>Lencana Anda</h3>

              <a href="#">Lihat Semua</a>
            </div>

            <div className="badgeList">
              <div className="badgeItem active">
                <FaBolt />
                <span>Hemat Pemula</span>
                <small>Level 1</small>
              </div>

              <div className="badgeItem orange">
                <FaMedal />
                <span>Konsisten</span>
                <small>7 Hari</small>
              </div>

              <div className="badgeItem green">
                <FaLeaf />
                <span>Peduli Lingkungan</span>
                <small>10 kg CO₂</small>
              </div>

              <div className="badgeItem gray">
                🔒
                <span>Ahli Hemat</span>
                <small>Level 5</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;

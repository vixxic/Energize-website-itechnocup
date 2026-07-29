import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <Image
              src="/footer-img/1 2.png"
              alt="Energize Logo"
              width={42}
              height={42}
            />
            <h2>Energize</h2>
          </div>

          <p>
            Pahami penggunaan energi Anda, temukan peluang
            penghematan, dan bersama-sama membangun masa depan
            yang lebih berkelanjutan.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Navigasi</h3>
          <a href="#">Beranda</a>
          <a href="#">Cara Kerja</a>
          <a href="#">Fitur</a>
          <a href="#">Dampak</a>
          <a href="#">Analisis Energi</a>
        </div>

        <div className={styles.footerColumn}>
          <h3>Aplikasi</h3>
          <a href="#">Mulai Analisis</a>
          <a href="#">Dashboard</a>
          <a href="#">Riwayat</a>
          <a href="#">Penggunaan</a>
        </div>

        <div className={styles.footerColumn}>
          <h3>Tentang</h3>
          <a href="#">Tentang Kami</a>
          <a href="#">SDGs</a>
          <a href="#">Kontak</a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © 2026 Energize. Dibuat untuk masa depan yang lebih hemat dan
          berkelanjutan.
        </p>
      </div>
    </footer>
  );
}
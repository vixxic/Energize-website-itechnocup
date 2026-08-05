import "./Fitur.css";

export default function Fitur() {
  return (
    <div className="fitur-section">
      <div>
        <p>Kenali Pola Penggunaan Energi Anda</p>
        <p className="sub-title">
          Pahami bagaimana rumah Anda menggunakan energi. Kami mengubah data
          menjadi insight yang membantu Anda mengambil langkah nyata.
        </p>
      </div>

      <div className="top-card">
        <div className="card small"></div>
        <div className="card small"></div>
        <div className="card small"></div>
        <div className="card small"></div>
      </div>

      <div className="badge-con">
        <img src="/badge-img/badge-efisien.png" />
        <img src="/badge-img/badge-tantangan-pertama.png" />
        <img src="/badge-img/badge-tantangan-kedua.png" />
        <img src="/badge-img/badge-tantangan-ketiga.png" />
        <img src="/badge-img/badge-penurunan-drastis.png" />
      </div>
    </div>
  );
}

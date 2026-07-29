import "./Fitur.css";

const features = [
  { title: "Analisis Konsumsi" },
  { title: "Identifikasi Perangkat Boros" },
  { title: "Insight & Rekomendasi AI" },
  { title: "Pantau Dampak Anda" },
];

function Fitur() {
  return (
    <section className="Fitur-section">
      <h2>Kenali Pola Penggunaan Energi Anda</h2>

      <p className="fitur-text">
        Pahami bagaimana rumah Anda menggunakan energi. Kami mengubah data
        menjadi insight yang membantu Anda mengambil langkah nyata.
      </p>

      <div className="fitur-container">
        {features.map((item, index) => (
          <div className="fitur-card" key={index}>
            <div className="fitur-box"></div>

            <p >{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fitur;
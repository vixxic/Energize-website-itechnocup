import "./Beranda.css";

function Beranda() {
  return (
    <div className="beranda-section padding">
      <div className="beranda-text-con">
        <h1>Pahami Energi Anda</h1>
        <p>
          Kenali pola penggunaan listrik, temukan peluang penghematan, dan
          bangun kebiasaan energi yang lebih bijak.
        </p>
      </div>

      <div className="beranda-img-con">
        <img src="/rumah.png" />
        {/* <img className="awan-ungu" src="/awan-ungu-rumah.png" /> */}
      </div>
    </div>
  );
}

export default Beranda;

import "./Info.css";

function Info() {
  return (
    <div className="info">

      <div className="infoHeader">
        <h1>Tantangan</h1>
        <p>
          Selesaikan tantangan hemat energi dan dapatkan poin untuk
          membentuk kebiasaan hemat listrik setiap hari.
        </p>
      </div>

      {/* Top Score */}
      <div className="scoreCard">

        <div className="scoreItem">
          <div className="scoreIcon">🏆</div>

          <div>
            <p className="label">Skor Efisiensi Anda</p>

            <div className="scoreRow">
              <h2>78</h2>
              <span>/100</span>

              <div className="badge">
                Baik
              </div>
            </div>

            <small>3 dari 5 tantangan selesai</small>
          </div>

        </div>

        <div className="divider"></div>

        <div className="scoreItem2">

          <p className="label">
            Progress Minggu Ini
          </p>

          <div className="progressBg">
            <div className="progressFill"></div>
          </div>

          <div className="progressBottom">
            <small>3 dari 5 tantangan selesai</small>

            <span>60%</span>
          </div>

        </div>

        <div className="divider"></div>

        <div className="scoreItem">
          <div className="scoreIcon star">
            ⭐
          </div>

          <div>
            <p className="label">Poin Anda</p>

            <h3>1.250</h3>

            <small>poin</small>
          </div>
        </div>

        <div className="divider"></div>

        <div className="scoreItem">
          <div className="scoreIcon fire">
            🔥
          </div>

          <div>
            <p className="label">Level Anda</p>

            <h3>Level 3</h3>

            <small>Pemula</small>
          </div>
        </div>

      </div>

      {/* Content */}

      <div className="contentGrid">

        <div className="leftCard">

          <h3>Tantangan Aktif</h3>

        </div>

        <div className="middleCard">

          <h3>Rekomendasi AI</h3>

        </div>

        <div className="rightCard">

          <h3>Dampak Jika Berhasil</h3>

        </div>

      </div>

    </div>
  );
}

export default Info;
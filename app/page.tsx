import Navbar from "./components/Navbar/Navbar";

// landing page
import Beranda from "./components/landingPage/Beranda/Beranda";

export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />

      {/* landing page */}
      <Beranda />
    </div>
  );
}

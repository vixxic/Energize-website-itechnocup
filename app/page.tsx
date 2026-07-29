import Navbar from "./components/Navbar/Navbar";

// landing page
import Beranda from "./components/landingPage/Beranda/Beranda";
import Problem from "./components/landingPage/Problem/Problem";

export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />

      {/* landing page */}
      <Beranda />
      <Problem />
    </div>
  );
}

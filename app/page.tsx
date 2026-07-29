import Navbar from "./components/Navbar/Navbar";

// landing page
import Beranda from "./components/landingPage/Beranda/Beranda";
import Problem from "./components/landingPage/Problem/Problem";
import Problem2 from "./components/landingPage/Problem2/Problem2";
import Fitur from "./components/landingPage/Fitur/Fitur";

export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />

      {/* landing page */}
      <Beranda />
      <Problem />
      <Problem2 />
      <Fitur />
    </div>
  );
}

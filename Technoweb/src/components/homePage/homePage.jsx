import NavBar from "./navBar";
import HeroSection from "./heroSection";
import Details from "./details"
import DarkHeroSection from "./DarkHeroSection";
function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Details/>
      <DarkHeroSection/>
    </div>
  );
}

export default HomePage;

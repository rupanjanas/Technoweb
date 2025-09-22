import NavBar from "./navBar";
import HeroSection from "./heroSection";
import Details from "./details"
import DarkHeroSection from "./DarkHeroSection";
import ServicesGrid from "./ServicesGrid";
import Development from "./developmentPhases";
function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Details/>
      <DarkHeroSection/>
      <ServicesGrid/>
      <Development/>
    </div>
  );
}

export default HomePage;

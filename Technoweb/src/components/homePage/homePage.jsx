import NavBar from "./navBar";
import HeroSection from "./heroSection";
import Details from "./details"
import DarkHeroSection from "./DarkHeroSection";
import ServicesGrid from "./ServicesGrid";
import Development from "./developmentPhases";
import FeaturesSection from "./ourProducts";
function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Details/>
      <DarkHeroSection/>
      <ServicesGrid/>
      <Development/>
      <FeaturesSection/>
    </div>
  );
}

export default HomePage;

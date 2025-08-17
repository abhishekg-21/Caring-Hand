import Hero from "./components/Hero";
import ImpactStats from "./components/ImpactStats";
import Programmes from "./components/Programmes";
import Stories from "./components/Stories";
import SupportCause from "./components/SupportCause";
import Partners from "./components/Partners";
import Accreditations from "./components/Accreditations";
import Newsletter from "./components/Newsletter";
import AboutSection from "./components/AboutSection";
import GoalsSection from "./components/GoalsSection";
import HealthcareAwardSection from "./components/HealthcareAwardSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ImpactStats />
      <Programmes />
      <GoalsSection />

      <Stories />
      <SupportCause />
      <Partners />
      <HealthcareAwardSection />
      <Accreditations />
      <Newsletter />
    </>
  );
}

import PortfolioSection from "./components/portfolio/PortfolioSection";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ServicesSection from "./components/services/ServicesSection";
import ExperienceSection from "./components/ucheba/ExperienceSection";
import SkillsSection from "./components/skills/SkillsSection";


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <ServicesSection/>
      <PortfolioSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <Contact/>
    </>
  )
}

export default App

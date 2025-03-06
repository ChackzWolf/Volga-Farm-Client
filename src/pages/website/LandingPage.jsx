import { Footer } from "../../components/website/Footer";
import { NavBar } from "../../components/website/NavBar";
import { About } from "../../components/website/landingPage/About";
import { AquaponicSection } from "../../components/website/landingPage/AquaponicsSection";
import { AquariumFishSection } from "../../components/website/landingPage/AquariumFishSection";
import { Contact } from "../../components/website/landingPage/Contacts";
import { Hero } from "../../components/website/landingPage/Hero";
import { HomeMade } from "../../components/website/landingPage/HomeMade";
import { PlantsSection } from "../../components/website/landingPage/PlantsSection";

export function LandingPage (){
    return(
          <div className="h-screen md:overflow-hidden flex flex-col">
              <NavBar />
              <div className="flex-1 overflow-y-auto snap-y snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
                <section id="hero" className="snap-start md:h-screen w-full">
                  <Hero />
                </section>
                <section id="about" className="snap-start md:h-screen w-full">
                  <About />
                </section>
                <section id="plants" className="snap-start md:h-screen w-full">
                  <PlantsSection />
                </section>
                <section id="aquaponics" className="snap-start md:h-screen w-full">
                  <AquaponicSection />
                </section>
                <section id="products" className="snap-start md:h-screen w-full bg-blue-50">
                  <AquariumFishSection />
                </section>
                <section id="contact" className="snap-start md:h-screen w-full">
                  <HomeMade />
                </section>
                <section className="snap-start md:h-screen w-full">
                  <Contact />
                </section>
                <div className="snap-start w-full">
                  <Footer />
                </div>
              </div>
            </div>
    )
}
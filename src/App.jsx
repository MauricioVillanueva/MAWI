import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import SplineKeyboard from "./components/SplineKeyboard";
import { useState, useEffect, lazy, Suspense } from "react";
import { navLinks } from "./constants";
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));

const App = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Cambiar a la sección correspondiente cuando se presiona una tecla del 1 al 6
      if (event.key >= "1" && event.key <= "4") {
        const section = navLinks[parseInt(event.key) - 1].title;
        setCurrentSection(section);

        // Navegar a la sección utilizando el ID
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Agrega el escucha de eventos de teclado
    window.addEventListener("keydown", handleKeyPress);

    // Limpia el escucha de eventos cuando el componente se desmonta
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentSection]);

  return (
    <BrowserRouter>
      <div className="h-full w-full overflow-hidden">
          <SplineKeyboard currentSection={currentSection} />
        <div className="relative z-0 bg-primary h-full w-full">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Hero id="part1" />
            </Suspense>
          </div>
          <div id="part2">
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

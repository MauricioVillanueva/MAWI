import { useState, useEffect, Suspense } from "react";
import { Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas, Hero, About} from "./components";
import SplineKeyboard from "./components/SplineKeyboard";
import { navLinks } from "./constants";

const App = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Cambiar a la sección correspondiente cuando se presiona una tecla del 1 al 4
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
      <div className="h-full w-full overflow-hidden">
        <Suspense fallback={<LoadingFallback />}>
          <SplineKeyboard currentSection={currentSection} />
        </Suspense>
        <div className="relative z-0 bg-primary h-full w-full">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Suspense fallback={<LoadingFallback />}>
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
  );
};

// Componente de carga personalizado
const LoadingFallback = () => <div>Loading...</div>;

export default App;

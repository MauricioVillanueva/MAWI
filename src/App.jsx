import { useState, useEffect, Suspense } from "react";
import { Contact, Experience, Navbar , Tech, Works, StarsCanvas, Hero, About} from "./components";
import SplineKeyboard from "./components/SplineKeyboard";
import { navLinks } from "./constants";

const App = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key >= "1" && event.key <= "4") {
        const section = navLinks[parseInt(event.key) - 1].title;
        setCurrentSection(section);

        const element = document.getElementById(section.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

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
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </div>
  );
};

const LoadingFallback = () => <div>Loading...</div>;

export default App;

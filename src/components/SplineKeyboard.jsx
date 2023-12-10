import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SplineKeyboard = ({ currentSection }) => {
  const splineRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(currentSection);

  useEffect(() => {
    const keyboard = splineRef.current;
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    let calculatedX = windowWidth - 800; 

    gsap.to(keyboard, {
      x: calculatedX,
      y: 200,
      scale: 1.3,
      duration: 1,
      ease: "power2.out",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#part1",
        start: "top 0",
        end: "bottom 50%",
        scrub: true,
        onEnter: () => {
          calculatedX = windowWidth - 800;
          gsap.to(keyboard, {
            x: calculatedX,
            y: 200,
            scale: 1.3,
            duration: 1,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          calculatedX = windowWidth - 800;
          gsap.to(keyboard, {
            x: calculatedX,
            y: 200,
            scale: 1.3,
            duration: 1,
            ease: "power2.out",
          });
        },
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#part2",
        start: "top 500px",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          calculatedX = windowWidth - 550;
          gsap.to(keyboard, {
            x: calculatedX,
            y: -10,
            scale: 0.6,
            duration: 1,
            ease: "power2.out",
          });
        },
      },
    });

    if (
      currentSection === "About" ||
      (currentSection === "Work") |
        (currentSection === "Projects") |
        (currentSection === "Contact")
    ) {
      calculatedX = windowWidth - 600;
      gsap.to(keyboard, {
        x: calculatedX,
        y: 100,
        scale: 0.7,
        duration: 1,
        ease: "power2.out",
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, currentSection]);

  return (
    <Spline
      className="z-[9999] fixed w-auto h-auto hidden lg:block"
      ref={splineRef}
      scene="https://prod.spline.design/MOPkSgiqVBXyLfi4/scene.splinecode"
      style={{ width: 650, height: 600, overflow: "visible" }}
    />
  );
};

SplineKeyboard.propTypes = {
  currentSection: PropTypes.string.isRequired,
};

export default SplineKeyboard;
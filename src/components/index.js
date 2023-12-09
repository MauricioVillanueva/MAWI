import { lazy } from "react";

import {
  SpaceShipCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas
} from "./canvas";

// Componentes
const Hero = lazy(() => import ("./Hero"));
const Navbar = lazy(() => import ("./Navbar"));
const About = lazy(() => import("./About"));
const Tech = lazy(() => import("./Tech"));
const Experience = lazy(() => import("./Experience"));
const Works = lazy(() => import("./Works"));
const Feedbacks = lazy(() => import("./Feedbacks"));
const Contact = lazy(() => import("./Contact"));
import CanvasLoader from "./Loader";

// Exportaciones
export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  SpaceShipCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas
};

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    photoshop,
    illustrator,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    blender,
    NGB,
    NG,
    HBDW,
    HBD,
    NEOGN,
    HYBRD,
    MAWI,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UX/UI Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "3D Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "blender",
      icon: blender,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
    {
      name: "illustrator",
      icon: illustrator,
    },
  ];
  
  const experiences = [
    {
      title: "FullStack Developer",
      company_name: "NEOGN",
      icon: NG,
      iconBg: "#383E56",
      date: "Sep 2023 - Nov 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "UX/UI Designer",
      company_name: "NEOGN",
      icon: NGB,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Nov 2023",
      points: [
        "Developed visually impactful interfaces, such as redesigning the homepage, resulting in a 20% increase in user retention.",
        "Conducted research to identify key features, successfully implementing two after exhaustive surveys and interviews.",
        "Designed a new registration flow, reducing abandonment rates by 15%",
        "Planned and executed interactive prototype tests, uncovering areas of confusion and enhancing the overall user experience.",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "HYBRD",
      icon: HBDW,
      iconBg: "#383E56",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Spearheaded the development of new features in React.js, enhancing the functionality and user experience.",
        "Worked seamlessly with diverse teams to create high-quality products, ensuring a unified development approach.",
        "Applied responsive design for optimal user experience across devices, ensuring a consistent interface.",
        "Actively engaged in code reviews, providing constructive feedback to foster code quality and continuous improvement within the team.",
      ],
    },
    {
      title: "UX/UI Designer",
      company_name: "HYBRD",
      icon: HBD,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Implemented visual enhancements, such as a color scheme and typography revamp, resulting in a more modern and cohesive user interface.",
        "Utilized interactive prototyping to simulate user interactions, leading to the refinement of navigation elements and a more intuitive user journey.",
        "Redesigned iconography and imagery to align with user preferences, contributing to a visually appealing and user-friendly interface.",
        "Enhanced user engagement by seamlessly integrating subtle microinteractions, particularly in form submissions and button clicks.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NEOGN",
      description:
        "This gaming tech e-commerce app delivers a seamless experience for enthusiasts, offering quick access to cutting-edge products and exclusive deals. With a user-friendly interface and real-time updates, it enhances the gaming shopping experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "checkout MP",
          color: "yellow-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "yellow-text-gradient",
        },
      ],
      image: NEOGN,
      githubLink: "https://github.com/MauricioVillanueva/NEOGN",
      figmaLink: "https://www.figma.com/file/XW5R5igJ6SnnQeCgmzqFES/NEOGN?type=design&node-id=0%3A1&mode=design&t=Dgm0vbhEIzM62dC4-1"
    },
    {
      name: "HYBRD",
      description:
        "This urban techwear e-commerce hub offers quick access to cutting-edge apparel and exclusive deals. With a user-friendly interface and real-time updates, it enhances the shopping experience for fashion-forward individuals.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "checkout MP",
          color: "yellow-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: HYBRD,
      githubLink: "https://github.com/MauricioVillanueva/HYBRD",
      figmaLink:"https://www.figma.com/file/zAuhAIeoueeCtLgAfqHDn5/HYBRD?type=design&node-id=0%3A1&mode=design&t=aIG0OUh8KZvsvYUT-1",
    },
    {
      name: "MAWI",
      description:
        "This portfolio showcases skills in web development, animation, 3D graphics, interface design, and efficient styling. This comprehensive approach demonstrates versatility and the ability to create engaging online experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "spline",
          color: "blue-text-gradient",
        },
      ],
      image: MAWI,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
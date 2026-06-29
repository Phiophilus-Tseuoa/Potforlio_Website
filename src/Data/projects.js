import {
    portfolio,
    pokemon,
    stocks,
    cleaning
} from "./projectImages";


const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A modern developer portfolio built with React, Vite, and Tailwind CSS.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 2,
    title: "Pokémon Search App",
    image: pokemon,
    description:
      "Search Pokémon using a public API and display detailed information.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Stock Analysis Dashboard",
    image: stocks,
    description:
      "Python dashboard that analyzes stock prices and company revenue using interactive charts.",
    technologies: [
      "Python",
      "Plotly",
      "Pandas",
      "Streamlit",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    id: 4,
    title: "Data Cleaning App",
    image: cleaning,
    description:
      "Interactive Streamlit application for cleaning, transforming, and preparing datasets.",
    technologies: [
      "Python",
      "Pandas",
      "Streamlit",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
];

export default projects;
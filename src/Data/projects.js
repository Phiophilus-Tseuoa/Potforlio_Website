import {
  portfolio,
  pokemon,
  stocks,
  cleaning,
} from "./projectImages";

const projects = [
  {
    id: 1,

    title: "Portfolio Website",

    image: portfolio,

    shortDescription:
      "Personal portfolio built with React and Tailwind CSS.",

    description:
      "Designed and developed a fully responsive portfolio website to showcase my software engineering, data science, and cybersecurity journey. Built using reusable React components and a scalable architecture with a focus on clean UI and maintainability.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],

    github: "#",

    demo: "#",

    featured: true,

    status: "In Progress",
  },

  {
    id: 2,

    title: "Pokémon Search App",

    image: pokemon,

    shortDescription:
      "Interactive Pokémon search application using a public REST API.",

    description:
      "Built a responsive web application that integrates the PokéAPI to search and display Pokémon information in real time. Implemented asynchronous JavaScript, API requests, and dynamic content rendering.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
    ],

    github: "#",

    demo: "#",

    featured: true,

    status: "Completed",
  },

  {
    id: 3,

    title: "Stock Analysis Dashboard",

    image: stocks,

    shortDescription:
      "Interactive dashboard for financial data analysis.",

    description:
      "Developed a Python dashboard that analyzes historical stock prices and company revenue using Pandas, Plotly, and Streamlit. Created interactive visualizations to help users explore financial trends.",

    technologies: [
      "Python",
      "Pandas",
      "Plotly",
      "Streamlit",
    ],

    github: "#",

    demo: "#",

    featured: true,

    status: "Completed",
  },

  {
    id: 4,

    title: "Data Cleaning Tool",

    image: cleaning,

    shortDescription:
      "Streamlit application for cleaning and preparing datasets.",

    description:
      "Created an interactive data cleaning application that enables users to upload datasets, handle missing values, remove duplicates, transform columns, and prepare data for analysis through an intuitive interface.",

    technologies: [
      "Python",
      "Pandas",
      "Streamlit",
    ],

    github: "#",

    demo: "#",

    featured: true,

    status: "Completed",
  },
];

export default projects;
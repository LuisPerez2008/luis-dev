export const TAGS = {
  FRONTEND: {
    HTML: {
      id: "html",
      name: "HTML",
      color: "#E34F26",
    },
    CSS: {
      id: "css",
      name: "CSS",
      color: "#1572B6",
    },
    JAVASCRIPT: {
      id: "javascript",
      name: "JavaScript",
      color: "#F7DF1E",
    },
    TAILWIND: {
      id: "tailwind",
      name: "Tailwind CSS",
      color: "#38BDF8",
    },
    REACT: {
      id: "react",
      name: "React",
      color: "#61DAFB",
    },
    VITE: {
      id: "vite",
      name: "Vite",
      color: "#646CFF",
    },
  },

  BACKEND: {
    JAVA: {
      id: "java",
      name: "Java",
      color: "#646CFF",
    },
    SPRINGBOOT: {
      id: "springboot",
      name: "Spring Boot",
      color: "#6DB33F",
    },
    NODE: {
      id: "nodejs",
      name: "Node.js",
      color: "#339933",
    },
  },

  DATABASE: {
    MYSQL: {
      id: "mysql",
      name: "MySQL",
      color: "#00758F",
    },
    POSTGRESQL: {
      id: "postgresql",
      name: "PostgreSQL",
      color: "#336791",
    },
    SUPABASE: {
      id: "supabase",
      name: "Supabase",
      color: "#3ECF8E",
    },
  },

  TOOLS: {
    GIT: {
      id: "git",
      name: "Git",
      color: "#F05032",
    },
    GITHUB: {
      id: "github",
      name: "GitHub",
      color: "#FFFFFF",
    },
    POSTMAN: {
      id: "postman",
      name: "Postman",
      color: "#FF6C37",
    },
  },
};

export const PROJECTS = [
  {
    title: "Libreria LibroEspacio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione pariatur aut quae corporis asperiores.",
    link: "https://front-libreria.vercel.app/",
    githubLink: "https://github.com/LuisPerez2008/front-libreria",
    tags: [
      TAGS.FRONTEND.TAILWIND,
      TAGS.FRONTEND.REACT,
      TAGS.BACKEND.SPRINGBOOT,
      TAGS.BACKEND.JAVA,
      TAGS.DATABASE.POSTGRESQL
    ],
  },
  {
    title: "Api Pokemon",
    description:
      " Una aplicación web moderna y responsiva para explorar información sobre todos los Pokémon. Construida con React, Vite y Tailwind CSS, ofrece una experiencia de usuario fluida y visualmente atractiva",
    link: "https://pokedex-pi-swart.vercel.app/",
    githubLink: "https://github.com/LuisPerez2008/pokedex",
    tags: [
      TAGS.FRONTEND.TAILWIND, 
      TAGS.FRONTEND.REACT, 
      TAGS.FRONTEND.JAVASCRIPT,
      TAGS.FRONTEND.VITE
    ],
  },
   {
    title: "BRUJA STORE",
    description:
      "BrujaStore es un sistema backend robusto construido con Spring Boot 3 que proporciona todas las funcionalidades necesarias para administrar una tienda online moderna. La aplicación incluye gestión de productos, categorías, usuarios, pedidos, compras, devoluciones, promociones y un sistema integral de puntos de recompensa.",
    link: "",
    githubLink: "https://github.com/LuisPerez2008/BrujaStoreBackend#",
    tags: [
      TAGS.BACKEND.SPRINGBOOT, 
      TAGS.BACKEND.JAVA,
      TAGS.DATABASE.POSTGRESQL

    ],
  },
];



 
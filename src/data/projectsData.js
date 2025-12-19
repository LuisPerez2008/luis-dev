export const TAGS = {
  // --- FRONTEND ---
  HTML: {
    id: "html",
    name: "HTML5",
    color: "#E34F26", // Naranja rojizo oficial
  },
  CSS: {
    id: "css",
    name: "CSS3",
    color: "#1572B6", // Azul oficial
  },
  JAVASCRIPT: {
    id: "javascript",
    name: "JavaScript",
    color: "#F7DF1E", // Amarillo oficial
  },
  TAILWIND: {
    id: "tailwind",
    name: "Tailwind CSS",
    color: "#38BDF8", // Cyan característico
  },
  REACT: {
    id: "react",
    name: "React",
    color: "#61DAFB", // Azul claro React
  },
  VITE: {
    id: "vite",
    name: "Vite",
    color: "#646CFF", // Violeta Vite
  },

  // --- BACKEND ---
  JAVA: {
    id: "java",
    name: "Java",
    color: "#E76F00", // Naranja del logo de Java
  },
  SPRINGBOOT: {
    id: "springboot",
    name: "Spring Boot",
    color: "#6DB33F", // Verde hoja Spring
  },
  NODE: {
    id: "nodejs",
    name: "Node.js",
    color: "#339933", // Verde oscuro Node
  },

  // --- BASES DE DATOS ---
  MYSQL: {
    id: "mysql",
    name: "MySQL",
    color: "#00758F", // Azul MySQL
  },
  POSTGRESQL: {
    id: "postgresql",
    name: "PostgreSQL",
    color: "#336791", // Azul elefante
  },
  SUPABASE: {
    id: "supabase",
    name: "Supabase",
    color: "#3ECF8E", // Verde esmeralda
  },

  // --- HERRAMIENTAS ---
  GIT: {
    id: "git",
    name: "Git",
    color: "#F05032", // Rojo anaranjado Git
  },
  GITHUB: {
    id: "github",
    name: "GitHub",
    color: "#FFFFFF", // Blanco (o negro #181717 si el fondo es claro)
  },
  POSTMAN: {
    id: "postman",
    name: "Postman",
    color: "#FF6C37", // Naranja Postman
  },
};


export const PROJECTS = [
  {
    title: "Libreria LibroEspacio",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione pariatur aut quae corporis asperiores.",
    link: "https://front-libreria.vercel.app/",
    githubLink: "https://github.com/LuisPerez2008/front-libreria", // Agregué esto para tener el link al repo
    tags: [TAGS.TAILWIND, TAGS.REACT, TAGS.SPRINGBOOT, TAGS.JAVA],
  },
  {
    title: "Api Pokemon",
    description: "Lorem ipsum dolor sit ametljkj jklj kljl jkjljljjljlj kjljlj  jkljljl jkl j consectetur adipisicing elit. Illum ratione pariatur aut quae corporis asperiores.",
    link: "https://google.com",
    githubLink: "https://google.com", // Agregué esto para tener el link al repo
    tags: [TAGS.TAILWIND, TAGS.REACT, TAGS.NODE],
  },
  
  
] 
import { useSectionStore } from "../store/sectionStore";

export const Header = () => {

    const activeSection = useSectionStore((state) => state.activeSection);
    return (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 md:left-4  md:translate-x-0 md:top-1/2 md:botton-0 md:-translate-y-1/2 animate-slide-in-bottom md:animate-slide-in-left">
            <nav className="flex gap-6 border bg-principal py-3 px-4 rounded-full border-morado-500 md:flex-col md:py-4 md:px-3">
                <a href="#sobremi"   className={`relative rounded-full p-2 group hover:bg-morado-400 cursor-pointer hover:-translate-y-1 md:hover:translate-y-0 md:hover:translate-x-1 transition-all duration-300 ${activeSection === "sobremi" ? "bg-morado-500" : ""}`}>
                    <svg
                        className="w-5 h-5 text-white/60  group-hover:text-morado-800 transition-all duration-300"
                        aria-hidden="true"
                        role="img"
                    >
                        <use href="/Icons.svg#user" />
                       
                    </svg>
                   
                    <span className="absolute text-white border border-morado-800 hidden group-hover:inline-block translate-y-2 text-xsm whitespace-nowrap p-0.5 ">
                        Sobre mí
                    </span>
                   
                </a>

                <a href="#proyectos" className={`relative rounded-full p-2 group hover:bg-morado-400 cursor-pointer hover:-translate-y-1 md:hover:translate-y-0 md:hover:translate-x-1 transition-all duration-300 ${activeSection === "proyectos" ? "bg-morado-500" : ""}`}>
                    <svg
                        className="w-5 h-5 text-white/60  group-hover:text-morado-800 transition-all duration-300"
                        aria-hidden="true"
                        role="img"
                    >
                        <use href="/Icons.svg#book" />
                    </svg>
                    <span className="absolute text-white border border-morado-800 hidden group-hover:inline-block translate-y-2 text-xsm whitespace-nowrap p-0.5 ">
                        Proyectos Personales
                    </span>
                </a>
                <a href="#tecnologias" className={`relative rounded-full p-2 group hover:bg-morado-400 cursor-pointer hover:-translate-y-1 md:hover:translate-y-0 md:hover:translate-x-1 transition-all duration-300 ${activeSection === "tecnologias" ? "bg-morado-500" : ""}`}>
                    <svg
                        className="w-5 h-5 text-white/60  group-hover:text-morado-800 transition-all duration-300"
                        aria-hidden="true"
                        role="img"
                    >
                        <use href="/Icons.svg#tools" />
                    </svg>
                    <span className="absolute text-white border border-morado-800 hidden group-hover:inline-block translate-y-2 text-xsm whitespace-nowrap p-0.5 ">
                        SKILLS
                    </span>
                </a>
                <a href="#educacion" className={`relative rounded-full p-2 group hover:bg-morado-400 cursor-pointer hover:-translate-y-1 md:hover:translate-y-0 md:hover:translate-x-1 transition-all duration-300 ${activeSection === "educacion" ? "bg-morado-500" : ""}`}>
                    <svg
                        className="w-5 h-5 text-white/60  group-hover:text-morado-800 transition-all duration-300"
                        aria-hidden="true"
                        role="img"
                    >
                        <use href="/Icons.svg#bolt" />
                    </svg>
                    <span className="absolute text-white border border-morado-800 hidden group-hover:inline-block translate-y-2 text-xsm whitespace-nowrap p-0.5 ">
                        Educación
                    </span>
                </a>
            </nav>
        </div>
    );
};

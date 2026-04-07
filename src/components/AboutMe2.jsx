export const AboutMe2 = () => {
    return (
        <section className="mt-32 text-white">
            <div className="max-w-[90%] mx-auto flex flex-col gap-10">
                <div className="flex items-center gap-3 group ">
                    <div className="relative flex items-center justify-center ">
                        <span className="absolute inset-0 rounded-full group-hover:bg-morado-300 blur-xl  transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 " />
                        <svg className="w-7 h-7 text-morado-300 relative z-10 group-hover:scale-110 transition-all duration-300">
                            <use href="/Icons.svg#user" />
                        </svg>
                    </div>

                    <span className="font-orbitron whitespace-nowrap text-white w-full text-2xl font-bold relative inline-flex items-center gap-4 after:content-[''] after:block after:h-0.5 after:w-full after:bg-linear-to-r after:from-morado-600 after:to-transparent after:shadow-md   ">
                        SOBRE MI
                    </span>
                </div>
                <div className="relative">
                    {/* FONDO DIFUMINADO */}
                    <div className="absolute inset-0 bg-morado-500/40 blur-2xl rounded-xl -z-10" />
                    <div className=" relative z-10 border border-morado-600 p-6 bg-morado-400/15 rounded-xl text-white backdrop-blur-xs hover:border-morado-700">
                        <p>
    Estudiante de Ingeniería en Sistemas, especializado en <span className="text-font-primary">desarrollo FullStack</span> con metodologías ágiles. Apasionado por crear soluciones tecnológicas innovadoras y escalables que resuelvan problemas reales. Con experiencia práctica en el desarrollo frontend con React y backend con Spring Boot, tengo sólidos conocimientos en bases de datos relacionales y herramientas modernas de desarrollo. Comprometido con la calidad del código, las mejores prácticas de ingeniería de software y el aprendizaje continuo. Busco aplicar mis conocimientos académicos en proyectos desafiantes donde pueda contribuir significativamente y crecer como profesional.
</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

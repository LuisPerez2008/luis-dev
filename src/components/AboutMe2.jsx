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
                            Ingeniero en sistemas, especializado en el <span className="text-font-primary">desarrollo FullSatck</span> con metodologias agiles Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem, sapiente repellendus molestias adipisci provident illo similique voluptatem, natus debitis esse nobis at ab corrupti aspernatur voluptas, minus eos voluptate! 
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

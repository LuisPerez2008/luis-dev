import { PROJECTS } from "../data/projectsData";

export const Projects = () => {
    return (
        <section className="mt-10  text-white">
            <div className="max-w-[90%] mx-auto flex flex-col gap-10">
                <div className="flex items-center gap-3 group ">
                    <div className="relative flex items-center justify-center ">
                        <span className="absolute inset-0 rounded-full group-hover:bg-morado-300 blur-xl  transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 " />
                        <svg className="w-7 h-7 text-morado-300 relative z-10 group-hover:scale-110 transition-all duration-300">
                            <use href="/Icons.svg#bolt" />
                        </svg>
                    </div>

                    <span className="font-orbitron  text-white w-full text-2xl font-bold relative inline-flex items-center gap-4 after:content-[''] after:block after:h-0.5 after:w-full after:bg-linear-to-r after:from-morado-600 after:to-transparent after:shadow-md text-wrap overflow-hidden md:text-nowrap">
                        PROYETOS PERSONALES
                    </span>
                </div>
                <div className="relative flex flex-col gap-5  ">
                    {PROJECTS.map((pro) => {
                        return (
                            <div key={pro.title} className=" relative flex flex-col z-10 border border-morado-500 p-6 bg-morado-400/15 rounded-xl space-y-2 text-white backdrop-blur-xs hover:border-morado-700 hover:-translate-y-0.5 transition-transform duration-300">
                                <div className="flex justify-between ">
                                    <div className=" ">
                                        <span className="font-orbitron font-semibold text-xl">
                                            {pro.title}
                                        </span>
                                    </div>
                                    <div className="flex gap-3 items-center [&>[span + svg]:] ">
                                        <a
                                            href={`${pro.link}`}
                                            target="_blank"
                                        >
                                            <span className="border border-morado-600 px-2 rounded-full cursor-pointer bg-morado-500/40 hover:bg-morado-600 transition-colors duration-300">
                                                demo
                                            </span>{" "}
                                        </a>
                                        <a
                                            href={`${pro.githubLink}`}
                                            target="_blank"
                                        >
                                            <svg className="text-white  w-6 h-6 hover:text-morado-800 cursor-pointer transition-colors duration-300">
                                                <use href="/Icons.svg#github"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="max-w-[95%] ">
                                    <p>
                                        {pro.description}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-2 flex-wrap h-auto">
                                    {
                                        pro.tags.map( tag => (
                                              <div key={tag.id} className="border text-sm border-morado-600 px-2 rounded-full  bg-morado-500/40 flex items-center justify-center gap-3 py-1">
                                        <svg className="w-4 h-4">
                                            <use href={`/Icons.svg#${tag.id}`}></use>
                                        </svg>
                                        <span>{tag.name}</span>
                                    </div>
                                        ))
                                    }
                                  
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

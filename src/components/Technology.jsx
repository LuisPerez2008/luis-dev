import { TAGS } from "../data/projectsData";

export const Technology = () => {
    return (
        <section className="mt-10 mb-10  text-white">
            <div className="max-w-[90%] mx-auto flex flex-col gap-10">
                <div className="flex items-center gap-3 group ">
                    <div className="relative flex items-center justify-center ">
                        <span className="absolute inset-0 rounded-full group-hover:bg-morado-300 blur-xl  transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 " />
                        <svg className="w-7 h-7 text-morado-300 relative z-10 group-hover:scale-110 transition-all duration-300">
                            <use href="/Icons.svg#bolt" />
                        </svg>
                    </div>

                    <span className="font-orbitron whitespace-nowrap text-white w-full text-2xl font-bold relative inline-flex items-center gap-4 after:content-[''] after:block after:h-0.5 after:w-full after:bg-linear-to-r after:from-morado-600 after:to-transparent after:shadow-md   ">
                        TECNOLOGIAS
                    </span>
                </div>
                <div className=" relative flex flex-col z-10 border border-morado-500 p-6 bg-morado-400/15 rounded-xl space-y-2 text-white backdrop-blur-xs hover:border-morado-700 hover:-translate-y-0.5 transition-transform duration-300">
                    <div className="flex flex-col  gap-3 mt-2  ">
                        {Object.keys(TAGS).map((category) => (
                            <div key={category} className="flex flex-col ">
                                <span className="font-orbitron text-font-primary text-xs font-semibold ">
                                    {category}
                                </span>
                                <div className="flex gap-3 flex-wrap mt-2 ">
                                    {Object.values(TAGS[category]).map(
                                        (tag) => (
                                            <div
                                                style={{
                                                    borderColor: tag.color,
                                                    backgroundColor: `${tag.color}30`,
                                                    color: `${tag.color}`,
                                                }}
                                                className={`border text-sm border-morado-600 px-3 rounded-full  flex items-center  justify-center gap-3 py-2 text-shadow-2xs`}
                                            >
                                                <svg className="w-4 h-4">
                                                    <use
                                                        href={`/Icons.svg#${tag.id}`}
                                                    ></use>
                                                </svg>
                                                <span className=" font-semibold  brightness-200 saturate-120 text-[14px]">
                                                    {tag.name}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

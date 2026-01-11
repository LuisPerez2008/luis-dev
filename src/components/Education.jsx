export const Education = () => {
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
                            EDUCACIÓN
                        </span>
                    </div>
                    <div className=" relative flex flex-col z-10 border border-morado-500 p-6 bg-morado-400/15 rounded-xl space-y-2 text-white backdrop-blur-xs hover:border-morado-700 hover:-translate-y-0.5 transition-transform duration-300">
                        <div className="flex flex-col  gap-2 mt-2  ">
                                       
                          <h3 className="font-orbitron font-semibold text-xl text-font-primary ">Ingenieria de Sistemas e Informatica</h3>
                          <span className="font-semibold text-gray-400">Universidad Tecnologica del Perú</span>
                          <span className="text-gray-500 text-sm">2021- presente</span>
                        </div>
                    </div>
                </div>
            </section>
  )
}
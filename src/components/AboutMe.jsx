export const AboutMe = () => {
    return (
        <section className="text-white wrapper space-y-4 mt-12   ">
            <div className=" rounded-full  bg-linear-to-r w-24 h-24 wrapper from-indigo-200 via-purple-500 to-cyan-700 text-transparent p-4 rotate-22 opacity-100 shadow-3xl shadow-purple-200 ">
                <h1 className=" text-2xl font-orbitron text-white font-extrabold -rotate-22 ">
                    LP
                </h1>
            </div>
            <div className="wrapper space-y-1">
                <h1 className="font-orbitron text-lp text-center font-semibold bg-linear-to-r from-indigo-100 via-purple-300 to-cyan-300 text-transparent bg-clip-text ">
                    Luis Antonio Perez Luna
                </h1>
                <h3 className="font-orbitron text-lg font-semibold text-morado-800 uppercase">
                    Ingeniero de Sistemas, FullSatck
                </h3>
                <span className="relative text-ml text-gray-400 before:block inline-flex items-center before:content-[''] before:bg-cyan-400 before:rounded-full  before:w-2 before:h-2 before:mr-2  ">Lima, Peru</span>
                <span className="text-gray-400">luis.08.2044@gmail.com</span>
                <button className="border-morado-600 bg-morado-500 p-4">Contactame</button>
            </div>
            <div>redes solcilales</div>
        </section>
    );
};

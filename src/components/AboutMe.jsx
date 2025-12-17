export const AboutMe = () => {
    return (
        <section className="text-white wrapper space-y-4 mt-15 bg-amber-200  ">
            <div className=" rounded-full  bg-linear-to-r w-24 h-24 wrapper from-indigo-200 via-purple-500 to-cyan-700 text-transparent p-4 rotate-22 opacity-100 shadow-3xl shadow-purple-200 ">
                <h1 className=" text-2xl font-orbitron text-white font-extrabold -rotate-22 ">
                    LP
                </h1>
            </div>
            <div className="wrapper space-y-3">
                <h1 className="font-orbitron text-lp text-center font-semibold bg-linear-to-r from-indigo-100 via-purple-300 to-cyan-300 text-transparent bg-clip-text ">
                    Luis Antonio Perez Luna
                </h1>
                <div className="wrapper mb-4">
                    <h3 className="font-orbitron text-lg font-semibold text-morado-800 uppercase">
                        Ingeniero de Sistemas, FullSatck
                    </h3>
                    <span className="relative text-sm text-gray-400 before:block inline-flex items-center before:content-[''] before:bg-cyan-400 before:rounded-full  before:w-2 before:h-2 before:mr-2  ">
                        Lima, Peru
                    </span>
                </div>
                <div className="text-gray-400 flex gap-3 items-center hover:text-cyan-400">
                    <svg
                        className="w-[18px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>
                    <span>luis.08.2044@gmail.com</span>
                </div>
                <button className="border-morado-700 border mt-4 bg-morado-500/50 px-8 py-3 flex items-center  rounded-lg cursor-pointer ">
                    Contáctame{" "}
                    <span className="efore:block inline-flex items-center before:content-[''] before:bg-cyan-400 before:rounded-full  before:w-2 before:h-2 before:ml-2 "></span>
                </button>
            </div>
            <div className="max-w-[80%] flex  gap-10 mt-15 ">
                <div className="bg-morado-500/50 p-4 rounded-full border border-morado-700 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105">
                    <svg className="w-6" viewBox="0 0 1024 1024" fill="none">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                            transform="scale(64)"
                            fill="#ffff"
                        />
                    </svg>
                </div>
                <div className="bg-morado-500/50 p-4 rounded-full border border-morado-700 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105">
                    <svg
                        className="w-6"
                        preserveAspectRatio="xMidYMid"
                        viewBox="0 0 256 256"
                    >
                        <path
                            d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="bg-morado-500/50 p-4 rounded-full border border-morado-700 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105">
                    <svg className="w-6" fill="none" viewBox="0 0 1200 1227">
                        <path
                            fill="#fff"
                            d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                        />
                    </svg>
                </div>
            </div>
        </section>

        
    );
};

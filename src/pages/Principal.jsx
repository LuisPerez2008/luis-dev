import { AboutMe } from "../components/AboutMe";
import { AboutMe2 } from "../components/AboutMe2";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Technology } from "../components/Technology";
import { useSectionObserver } from "../store/sectionStore";

export const Principal = () => {
    useSectionObserver();
    return (
        <div className="h-auto w-full flex flex-col md:grid md:grid-cols-2 ">
            <Header />
            <div className="">
                <AboutMe />
            </div>
            <div className="">
                <div id="sobremi">
                <AboutMe2 />
                </div>
                <div id="proyectos">
                <Projects />
                </div>
                <div id="tecnologias">
                <Technology />
                </div>
                <div id="educacion">
                <Education />
                </div>
            </div>
            <Footer />
        </div>
    );
};

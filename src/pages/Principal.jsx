import { AboutMe } from "../components/AboutMe";
import { AboutMe2 } from "../components/AboutMe2";
import { Education } from "../components/Education";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Technology } from "../components/Technology";

export const Principal = () => {
    return (
        <div className="h-auto w-full flex flex-col md:grid md:grid-cols-2 ">
            <Header />
            <div className="">
                <AboutMe />
            </div>
            <div className="">
                <AboutMe2 />
                <Projects />
                <Technology />
                <Education />
            </div>
        </div>
    );
};

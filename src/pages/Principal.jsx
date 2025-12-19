import { AboutMe } from "../components/AboutMe"
import { AboutMe2 } from "../components/AboutMe2"
import { Header } from "../components/Header"
import { Projects } from "../components/Projects"

export const Principal = () => {
  return (
    <div className="h-auto w-full ">
      <Header />
      <AboutMe />
      <AboutMe2 />
      <Projects /> 

     

     
    </div>
  )
}
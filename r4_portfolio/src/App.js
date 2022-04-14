import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SectionComponent from "./components/SectionComponent";
import { FaLightbulb, FaUserCog, FaTasks, FaLaptopCode } from "react-icons/fa";
import Skill from "./components/Skill";
import ProgressBarWrapper from "./components/ProgressBarWrapper";
import ProgressBar from "./components/ProgressBar";

function App() {
  const links = [
    {
      key: 1,
      label: "Home",
      href: "#section-1",
    },
    {
      key: 2,
      label: "About",
      href: "#section-2",
    },
    {
      key: 3,
      label: "Portfolio",
      href: "#section-3",
    },
    {
      key: 4,
      label: "Contact",
      href: "#section-4",
    },
  ];

  const skills = [
    {
      key: 1,
      icon: <FaLightbulb />,
      skillHeading: "Creative Problem Solver",
    },
    {
      key: 2,
      icon: <FaUserCog />,
      skillHeading: "Collaborator",
    },
    {
      key: 3,
      icon: <FaTasks />,
      skillHeading: "Transferrable skills",
    },
    {
      key: 4,
      icon: <FaLaptopCode />,
      skillHeading: "Data Structure and Algorithms",
    },
  ];

  const languages = [
    {
      key: 1,
      language: "HTML & CSS",
      percent: 80,
    },
    {
      key: 2,
      language: "JavaScript",
      percent: 70,
    },
    {
      key: 3,
      language: "React",
      percent: 51,
    },
    {
      key: 4,
      language: "Java",
      percent: 57,
    },
    {
      key: 5,
      language: "Git & Github",
      percent: 77,
    },
    {
      key: 6,
      language: "CICD & Agile",
      percent: 70,
    },
  ];

  const projects = [
    {
      key: 1,
      projectName: "Guess My Number",
      projectTechnologies: "HTML, CSS, JavaScript",
      img: "images/project-2.jpg",
      href: "https://github.com/ktSuW/js_projects_practice/tree/master/guess_my_number",
    },
  ];

  return (
    <div className='App'>
      <Header />
      <Navigation links={links} />
      <SectionComponent heading='About'>
        <div className='skills'>
          {skills.map(({ key,icon, skillHeading }) => (
            <Skill   
              key={key}
             icon={icon} 
             title={skillHeading} />
          ))}
        </div>
        <div className="progress-bars-wrapper">

        </div>
      </SectionComponent>
    </div>
  );
}

export default App;

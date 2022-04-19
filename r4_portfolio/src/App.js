import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SectionComponent from "./components/SectionComponent";
import { FaLightbulb, FaUserCog, FaTasks, FaLaptopCode } from "react-icons/fa";
import Skill from "./components/Skill";
import ProgressBar from "./components/ProgressBar";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

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
      projectName: "Travel Website - Bootstrap",
      projectTechnologies: "HTML, CSS, JavaScript",
      img: "images/project-1.jpg",
      href: "https://github.com/ktSuW/js_projects_practice/tree/master/travel_bootstrap",
      goTo: "Go to the source",
    },
    {
      key: 2,
      projectName: "Guess My Number",
      projectTechnologies: "HTML, CSS, JavaScript",
      img: "images/project-2.jpg",
      href: "https://github.com/ktSuW/js_projects_practice/tree/master/guess_my_number",
      goTo: "Go to the source",
    },
    {
      key: 3,
      projectName: "Form Validator",
      projectTechnologies: "HTML, CSS, JavaScript",
      img: "images/project-3.jpg",
      href: "https://github.com/ktSuW/js_projects_practice/tree/master/form_validator",
      goTo: "Go to the source",
    },
    {
      key: 4,
      projectName: "Data Structure and Algorithms",
      projectTechnologies: "JavaScript & Java",
      img: "images/project-4.jpg",
      href: "https://www.youtube.com/watch?v=KrExoVSBSW4&ab_channel=ktsuw_21",
      goTo: "Go to YouTube",
    },
    {
      key: 5,
      projectName: "Guess My Number",
      projectTechnologies: "HTML, CSS, JavaScript",
      img: "images/project-5.jpg",
      href: "https://github.com/ktSuW/js_projects_practice/tree/master/guess_my_number",
      goTo: "Go to the source",
    },
    {
      key: 6,
      projectName: "Stop Watch",
      projectTechnologies: "HTML, CSS, JavaScript",
      img: "images/project-6.jpg",
      href: "#",
      goTo: "Go to the source",
    },
  ];



  return (
    <div className='App'>
      <Header />
      <Navigation links={links} />
      <SectionComponent heading='About'>
        <div className='skills'>
          {skills.map(({ key, icon, skillHeading }) => (
            <Skill key={key} icon={icon} title={skillHeading} />
          ))}
        </div>
        <div className='progressBarsWrapper'>
          <div className='languages'>
            {languages.map(({ key, language, percent }) => (
              <ProgressBar key={key} language={language} percent={percent} />
            ))}
          </div>
        </div>
      </SectionComponent>
      <SectionComponent heading='Projects'>
        <div className='projectsWrapper center'>
          {projects.map(
            ({ key, projectName, projectTechnologies, img, href, goTo }) => (
              <Project
                key={key}
                projectName={projectName}
                projectTechnologies={projectTechnologies}
                img={img}
                href={href}
                goTo={goTo}
              />
            )
          )}
        </div>
      </SectionComponent>
      <SectionComponent heading='Contact Me'>
        <ContactForm />
      </SectionComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;

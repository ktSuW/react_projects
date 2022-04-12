import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SkillsetList from "./components/SkillsetList";


function App() {
  const links = [
    {
      key: 1,
      label : "Home",
      href : "#section-1"
    },
    {
      key: 2,
      label : "About",
      href : "#section-2"
    },
    {
      key: 3,
      label : "Portfolio",
      href : "#section-3"
    },
    {
      key: 4,
      label : "Contact",
      href : "#section-4"
    }
  ];
  return (
    <div className='App'>
      <Header />
      <Navigation links={links} />
      {/* <SectionComponent/> */}
      {/* <SkillsetList /> */}
    </div>
  );
}

export default App;

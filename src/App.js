import { useContext} from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";


function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{backgroundColor: darkMode ? "#25252521" : "white", color: darkMode && "white", overflowX: "hidden" }}>
      <Toggle />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

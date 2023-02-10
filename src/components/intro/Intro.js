import "./intro.css";
import profile from "../../img/profile.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";


const Intro = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div id="home" className="i" style={{backgroundColor: darkMode && "#383838"}}>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <a className="navbar-link" href="#home">
              Homepage
            </a>
          </li>
          <li className="navbar-li">
            <a className="navbar-link" href="#about">
              About
            </a>
          </li>
          <li className="navbar-li">
            <a className="navbar-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="navbar-li">
            <a className="navbar-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-intro-name">Jeremy Evans</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Frontend Developer</div>
            </div>
          </div>
          <p className="i-desc">I design and develope responsive applications using React and JavaScript. I specialize in building and developing full stack applicaitons.</p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profile} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

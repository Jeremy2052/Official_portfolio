import "./about.css";
import profile2 from "../../img/profile2.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div id="about" className="about" style={{backgroundColor: darkMode && "#2c2c2c"}}>
      <div className="about-left">
        {/* <div className="about-card bg"></div> */}
        <div className="about-card">
          <img src={profile2} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          I am a recent graduate at University of Texas at Arlington and currently hold a bachelor’s degree in Computer Science but continue to learn and work on projects to expand my knowledge on what I love to do with building applications. I have 2 years of experience in front-end developing with
          React and specialize in JavaScript but have familiar knowledge of Python and Java. Using my skills, I have developed personal projects such as ecommerce shopping websites as well as social media applications.
        </p>
        <p className="about-desc">
          I continue to build projects on my free time using React.js as the framework for the front-end and Node.js, Express and MongoDB for the back-end. I enjoy learning and progressing with the framework and the languages I use to become more skillful especially when there are challenges. I
          manage my free time to take online courses and tutorials to learn and improve on what I enjoy doing. I also enjoy working aside with others in teams and I am not afraid to ask questions or for help if needed in order to solve all problems.
        </p>
      </div>
    </div>
  );
};

export default About;

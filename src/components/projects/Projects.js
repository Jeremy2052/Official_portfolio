import Product from "../product/Product";
import "./projects.css";
import hiddenPalace from "../../img/hiddenpalace.PNG";
import amazon from "../../img/amazonclone1.PNG";
import chatJS from "../../img/chatJS.PNG";
import crypto from "../../img/Crypto.png";
import netflix from "../../img/netflix-clone.png";
import shopNgo from "../../img/shopNgo.PNG";
import socialMedia from "../../img/Social-Media.png";
import chefsDream from "../../img/chefsDream1.PNG";
import paradise from "../../img/paradise.PNG";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className="projects"
      style={{ backgroundColor: darkMode && "#3a3a3a" }}
    >
      <div className="container">
        <h1 className="title">Projects</h1>
        <div className="project-card">
          <Product
            img={hiddenPalace}
            title="Hidden Palace"
            link="https://hidden-palace.herokuapp.com/"
            github="https://github.com/Jeremy2052/HiddenPalace"
            desc={"Ecommerce Shoe Store"}
          />
          <Product
            img={shopNgo}
            title="ShopN' Go"
            link="https://shopn-go.herokuapp.com/"
            github="https://github.com/Jeremy2052/ShopN-Go"
            desc={"Ecommerce Clothing Store"}
          />
          <Product
            img={paradise}
            title="Paradise"
            link="https://paradise-booking.netlify.app/"
            github="https://github.com/Jeremy2052/Paradise/tree/master"
            desc={"Booking Frontend"}
          />
          <Product
            img={chefsDream}
            title="Chefs Dream"
            link="https://chefs-dream.netlify.app/"
            github="https://github.com/Jeremy2052/chefsDream/tree/master"
            desc={"Restraunt order/ delivery frontend"}
          />
          <Product
            img={socialMedia}
            title="Social World"
            link="https://social-world-media.herokuapp.com/"
            github="https://github.com/Jeremy2052/Social-world-media"
            desc={"Social Media/Messenger"}
          />
          <Product
            img={chatJS}
            title="Project 0"
            link="https://first--project-22f41.firebaseapp.com/"
            github="https://github.com/Jeremy2052/React_Project/tree/main"
            desc={"Messenger/Weather/Movies AIO App"}
          />
          <Product
            img={amazon}
            title="Amazon Frontend"
            link="https://clone-95354.web.app/"
            github="https://github.com/Jeremy2052/Amazon-clone"
            desc={"Amazon Frontend Clone"}
          />
          <Product
            img={netflix}
            title="Netflix Frontend"
            link="https://netflix-clone-f6b3f.web.app/"
            github="https://github.com/Jeremy2052/netflix-clone/tree/master"
            desc={"Netflix Frontend Clone"}
          />
          <Product
            img={crypto}
            title="Crypto Tracker"
            link="https://serene-volhard-10cc9e.netlify.app/"
            github="https://github.com/Jeremy2052/Crypto_tracker"
            desc={"API Crypto Tracker"}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;

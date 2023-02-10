import "./contact.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_a5b23r8", "template_eyzwrui", formRef.current, "jCUDu1Z0qYRU2f3Uw").then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div id="contact" className="contact" style={{backgroundColor: darkMode && "#2c2c2c"}}>
      <div className="contact-icon">
        <EmailOutlinedIcon style={{ color: "white", fontSize:"60px" }} />
      </div>
      {/* <div className="contact-bg"></div> */}
      <div className="contact-wrapper" style={{background: darkMode && "#3a3a3a"}}>
        <div className="contact-left">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-info">
            {/* <div className="contact-info-title">Contact for more information</div> */}
            <div className="contact-info-items">
              <div className="contact-info-item">
                <PhoneIcon color="primary" />
                <span>+1 (682) 208 6837</span>
              </div>
              <div className="contact-info-item">
                <EmailIcon color="success" />
                <span>jeremy_syo_evans@gmail.com</span>
              </div>
              <div className="contact-info-item">
                <PlaceIcon color="secondary" />
                <span>6501 Falcon River Way Apt 226 Arlington, TX</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h1 className="contact-right-title">Get in touch</h1>
          <p>Have any questions? Feel free to email me.</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"  style={{background: darkMode && "#3a3a3a", color:"white"}}/>
            <input type="text" placeholder="Subject" name="user_subject"  style={{background: darkMode && "#3a3a3a", color:"white"}}/>
            <input type="text" placeholder="Email" name="user_email" style={{background: darkMode && "#3a3a3a", color:"white"}}/>
            <textarea rows="5" placeholder="Messsage" name="message"  style={{background: darkMode && "#3a3a3a", color:"white"}}/>
            <button>Send</button>
            {done && <h4 className="success">Email has successfully sent. Thank you!</h4>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import classes from "./contact.module.css";

function Contact() {
  return (
    <div className={classes.contact}>
      <hr></hr>
      <h2>Contact Info :: </h2>
      <div className={classes.contactInfo}>
        <p>Email - suryadpawar@gmail.com</p>
        <p>Mobile - +91 7774851863</p>
        <p>Pune, Maharashtra, India</p>
      </div>
      <div className={classes.social}>
        <img
          src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/linked.png?raw=true"
          alt="linkedin"
        />
        <img
          src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/tw.png?raw=true"
          alt="twitter"
        />
        <img
          src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/insta.png?raw=true"
          alt="instagram"
        />
        <img
          src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/wh.png?raw=true"
          alt="whatsapp"
        />
        <img
          src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/fb.png?raw=true"
          alt="facebook"
        />
      </div>
    </div>
  );
}

export default Contact;

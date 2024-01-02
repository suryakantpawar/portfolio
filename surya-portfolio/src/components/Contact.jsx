import React from "react";
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
    </div>
  );
}

export default Contact;

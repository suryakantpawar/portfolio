import React from "react";
import classes from "./profile.module.css";

export default function Profile() {
  return (
    <div>
      <img
        className={classes.profilebg}
        src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/public/bg_image.jpg?raw=true"
      />
    </div>
  );
}

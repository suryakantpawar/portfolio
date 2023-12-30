import React from "react";
import classes from "./profile.module.css";

export default function Profile() {
  return (
    <div className={classes.profilediv}>
      <img
        className={classes.profilebg}
        src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/bg_image.jpg?raw=true"
      />
      <img
        className={`${classes.indflag}  ${classes.flagspin}`}
        src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/india%20flag.png?raw=true"
      />
      <img
        className={classes.profileimg}
        src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/my%20profile.png?raw=true"
      />
      <div>
        <h3 className={classes.titleh3}>Hi, I am</h3>
        <h1 className={classes.titleh1}>Suryakant</h1>
      </div>
    </div>
  );
}

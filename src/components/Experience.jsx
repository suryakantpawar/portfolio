import React from "react";
import classes from "./experience.module.css";

export default function Experience() {
  return (
    <div className={classes.experience}>
      <h2 className={classes.expHeading}>Experience</h2>
      <div className={classes.companyLogoDiv}>
        <img
          className={classes.companyLogo}
          src="https://raw.githubusercontent.com/suryakantpawar/portfolio/f466baaaecae871b55e1c2674af323bbee482e7c/src/assets/gp.svg"
          alt="gp"
        />
        <img
          className={classes.companyLogo}
          src="https://raw.githubusercontent.com/suryakantpawar/portfolio/f466baaaecae871b55e1c2674af323bbee482e7c/src/assets/tsys.svg"
          alt="tsys"
        />
      </div>
    </div>
  );
}

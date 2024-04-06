import React from "react";
import classes from "./experience.module.css";

export default function Experience() {
  return (
    <div className={classes.experience}>
      <h2 className={classes.expHeading}>Experince</h2>
      <div className={classes.companyLogoDiv}>
        <img
          className={classes.companyLogo}
          src="https://raw.githubusercontent.com/suryakantpawar/portfolio/d69e30fc7c82a010d577eff5b57609c0b420665a/src/assets/gp.svg"
          alt="gp"
        />
        <img
          className={classes.companyLogo}
          src="https://raw.githubusercontent.com/suryakantpawar/portfolio/d69e30fc7c82a010d577eff5b57609c0b420665a/src/assets/tsys.svg"
          alt="tsys"
        />
      </div>
    </div>
  );
}

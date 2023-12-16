import React from "react";
import classes from "./profile.module.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
</style>;

export default function Profile() {
  return (
    <div>
      <img
        className={classes.profilebg}
        src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/bg_image.jpg?raw=true"
      />
      <img
        className={classes.indflag}
        src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/india%20flag.png?raw=true"
      />
      <img
        className={classes.profile}
        src="https://github.com/suryakantpawar/portfolio/blob/main/surya-portfolio/src/assets/my%20profile.png?raw=true"
      />
      <h3 className={classes.title}>Hi, I am</h3>
      <h1 className={classes.title}>Suryakant</h1>
    </div>
  );
}

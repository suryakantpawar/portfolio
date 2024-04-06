import React, { useMemo } from "react";
import classes from "./Skills.module.css";

function Skills() {
  const skills = useMemo(() => {
    return [
      "Core Java",
      "Advance Java",
      "ReactJS",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "Oracle",
      "Postgress",
      "Git",
      "Maven",
    ];
  }, []);

  return (
    <div className={classes.skillsDiv}>
      <img
        className={classes.bgimage}
        src="https://github.com/suryakantpawar/portfolio/blob/main/src/assets/skills%20bg.jpg?raw=true"
        alt="bg"
      />
      <h2 className={classes.skillTitle}>Skills</h2>
      <div className={classes.skills}>
        <div className={`${classes.skill} ${classes.skill0}`}>{skills[0]}</div>
        <div className={`${classes.skill} ${classes.skill1}`}>{skills[1]}</div>
        <div className={`${classes.skill} ${classes.skill2}`}>{skills[2]}</div>
        <div className={`${classes.skill} ${classes.skill3}`}>{skills[3]}</div>
        <div className={`${classes.skill} ${classes.skill4}`}>{skills[4]}</div>
        <div className={`${classes.skill} ${classes.skill5}`}>{skills[5]}</div>
        <div className={`${classes.skill} ${classes.skill6}`}>{skills[6]}</div>
        <div className={`${classes.skill} ${classes.skill7}`}>{skills[7]}</div>
        <div className={`${classes.skill} ${classes.skill8}`}>{skills[8]}</div>
        <div className={`${classes.skill} ${classes.skill9}`}>{skills[9]}</div>
      </div>
    </div>
  );
}

export default Skills;

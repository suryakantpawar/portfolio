import React from "react";
import classes from "./hobbies.module.css";

function Hobbies() {
  return (
    <div className={classes.hobbies}>
      <div className={classes.heading}>
        <h1>H</h1>
        <h1>O</h1>
        <h1>B</h1>
        <h1>B</h1>
        <h1>I</h1>
        <h1>S</h1>
      </div>
      <div className={classes.hobbieContainer}>
        <div className={`${classes.hobbie} ${classes.hobbie1}`}>
          <h1>T</h1>
        </div>
        <div className={`${classes.hobbie} ${classes.hobbie2}`}>
          <h1>G</h1>
        </div>
        <div className={`${classes.hobbie} ${classes.hobbie3}`}>
          <h1>D</h1>
        </div>
        <div className={`${classes.hobbie} ${classes.hobbie4}`}>
          <h1>C</h1>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;

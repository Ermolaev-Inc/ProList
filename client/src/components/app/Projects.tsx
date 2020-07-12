import React from "react";
import classes from "./styles/AppContainer.module.css";

export const Projects = (props: any) => {
  debugger
  return(
    <div className={classes.project}>
      {props.projectName}
    </div>
  )
}
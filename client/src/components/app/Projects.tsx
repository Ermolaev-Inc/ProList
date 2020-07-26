import React, { useState } from "react";
import classes from "./styles/AppContainer.module.css";

export const Projects = (props: any) => {
  let [isSelected, setSelected] = useState(false);
  const selectProject = () => {
    setSelected(!isSelected);
  }
  
  return(
    <div className={classes.project}>
      <div className={isSelected ? classes.selectedForm : classes.notSelectedForm}>
        <li key={props.key} onClick={selectProject} className={isSelected ? classes.selectedProject : classes.notSelectedProject}>{props.projectName}</li>
      </div>
    </div>
  )
}
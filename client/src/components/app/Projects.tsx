import React, { useState } from "react";
import classes from "./styles/AppContainer.module.css";
import { IPropsProjects } from "../../interfaces";

export const Projects = (props: IPropsProjects) => {
  let [isSelected, setSelected] = useState(false);
  const selectProject = () => {
    setSelected(!isSelected);
  }
  return(
    <div className={classes.project}>
      <div className={isSelected ? classes.selectedForm : classes.notSelectedForm}>
        <li onClick={selectProject} className={isSelected ? classes.selectedProject : classes.notSelectedProject}>{props.projectName}</li>
      </div>
    </div>
  )
}
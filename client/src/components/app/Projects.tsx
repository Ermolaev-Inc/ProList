import React, { useState } from "react";
import classes from "./styles/AppContainer.module.css";
import { IPropsProjects } from "../../interfaces";

export const Projects = (props: IPropsProjects) => {
  let [isSelected, setSelected]: [boolean, Function] = useState(false);
  let [isContextMenu, setContextMenu]: [boolean, Function] = useState(false);
  const selectProject = (): void => {
    setSelected(!isSelected);
  }
  const showContextMenu = (event: any): void => {
    //TODO: Context Menu (#27)
    event.preventDefault();
    setContextMenu(!isContextMenu);
  }
  return(
    <div className={classes.project}>
      <div className={isSelected ? classes.selectedForm : classes.notSelectedForm}>
        <li onClick={selectProject} 
            onContextMenu={showContextMenu} 
            className={isSelected ? classes.selectedProject : classes.notSelectedProject}>
              <span className={isContextMenu ? classes.contextMenu : ""}>{props.projectName}</span>
        </li>
      </div>
    </div>
  )
}
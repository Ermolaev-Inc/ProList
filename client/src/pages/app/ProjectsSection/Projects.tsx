import React, { useState } from "react";
import classes from "../sass/AppContainer.module.sass";
import { IPropsProjects } from "../../../interfaces";

export const Projects = (props: IPropsProjects) => {
  let [isSelected, setSelected]: [boolean, Function] = useState(false);
  let [isContextMenu, setContextMenu]: [boolean, Function] = useState(false);
  const selectProject = (event: any): void => {
    setSelected(!isSelected);
    if (!isSelected) {
      props.renderProjectTodos(event.target.lastChild.data);
    } else {
      props.clearTodosSection();
    }
  }
  const showContextMenu = (event: any): void => {
    //TODO: Context Menu (#27)
    event.preventDefault();
    setContextMenu(!isContextMenu);
  }
  return(
    <div className={classes.project}>
      <div className={isSelected ? classes.selectedForm : classes.notSelectedForm}>
        <li onContextMenu={showContextMenu} 
            className={isSelected ? classes.selectedProject : classes.notSelectedProject}>
              <span onClick={selectProject} className={isContextMenu ? classes.contextMenu : ""}>{props.projectName}</span>
        </li>
      </div>
    </div>
  )
}
import React, { useState } from "react";
import classes from "../sass/AppContainer.module.sass";
import { IProjectProps } from "../../../interfaces";

export const Project: React.FC<IProjectProps> = ({ 
  projectName,
  changeCurrentProject 
}) => {
  const [isSelected, setSelected]: [boolean, Function] = useState(false);
  const selectProject = (): void => {
    setSelected(!isSelected);
    changeCurrentProject(projectName);
  }

  const [isContextMenu, setContextMenu]: [boolean, Function] = useState(false);
  const showContextMenu = (event: any): void => {
    //TODO: Context Menu
    event.preventDefault();
    setContextMenu(!isContextMenu);
  }

  return(
    <div className={classes.project}>
      <div className={isSelected ? classes.selectedForm : classes.notSelectedForm}>
        <li onContextMenu={showContextMenu} 
            className={isSelected ? classes.selectedProject : classes.notSelectedProject}>
              <span onClick={() => { selectProject() }} className={isContextMenu ? classes.contextMenu : ""}>{projectName}</span>
        </li>
      </div>
    </div>
  )
}
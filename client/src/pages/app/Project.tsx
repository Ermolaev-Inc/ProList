import React, { useState } from "react";
import s from "./sass/AppContainer.module.sass";
import { IProjectProps } from "../../interfaces";

export const Project: React.FC<IProjectProps> = ({ 
  projectName,
  changeCurrentProject 
}) => {
  const [isSelected, setSelected]: [boolean, Function] = useState(false);
  const selectProject = (): void => {
    // TODO: Refactor
    setSelected(!isSelected);
    if (!isSelected) {
      changeCurrentProject(projectName);
    } else {
      changeCurrentProject("");
    }
  }

  const [isContextMenu, setContextMenu]: [boolean, Function] = useState(false);
  const showContextMenu = (event: any): void => {
    //TODO: Context Menu
    event.preventDefault();
    setContextMenu(!isContextMenu);
  }

  return(
    <div className={s.project}>
      <div className={isSelected ? s.selectedForm : s.notSelectedForm}>
        <li onContextMenu={showContextMenu} 
            className={isSelected ? s.selectedProject : s.notSelectedProject}>
              <span onClick={() => { selectProject() }} className={isContextMenu ? s.contextMenu : ""}>{projectName}</span>
        </li>
      </div>
    </div>
  )
}
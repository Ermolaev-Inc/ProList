import React from "react";
import classes from "../styles/AppContainer.module.css";
import { IPropsCreateProjectTemplate } from "../../../interfaces";

export const CreateProjectTemplate = (props: IPropsCreateProjectTemplate) => {
  return(
    <div className={classes.project}>
      <div className={classes.notSelectedForm}>
        <li className={classes.notSelectedProject}>
          <input type="text" className={classes.projectInput} name="projectName" onKeyPress={props.createProject} tabIndex={0} />
        </li>
      </div>
    </div>
  )
}
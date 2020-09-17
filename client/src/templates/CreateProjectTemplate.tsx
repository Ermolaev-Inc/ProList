import React from "react";
import s from "../pages/app/sass/AppContainer.module.sass";
import { IPropsCreateProjectTemplate } from "../interfaces";

export const CreateProjectTemplate = (props: IPropsCreateProjectTemplate) => {
  return(
    <div className={s.project}>
      <div className={s.notSelectedForm}>
        <li className={s.notSelectedProject}>
          <input type="text" className={s.projectInput} name="projectName" onKeyPress={props.createProject} tabIndex={0} />
        </li>
      </div>
    </div>
  )
}
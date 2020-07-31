import React, { useContext } from "react";
import classes from "./styles/AppContainer.module.css";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext } from "../../interfaces";

export const CreateProjectTemplate = () => {
  const request: Function = useHttp();
  const authInfo: IAuthContext = useContext(AuthContext);
  const createProject = async (event: any): Promise<void> => {
    if (event.key === "Enter") {
      const projectName: string = event.target.value;
      await request("/api/personal/create/project", "POST", {authInfo, projectName});
    }
  }
  return(
    <div className={classes.project}>
      <div className={classes.notSelectedForm}>
        <li className={classes.notSelectedProject}>
          <input type="text" className={classes.projectInput} name="projectName" onKeyPress={createProject} tabIndex={0} />
        </li>
      </div>
    </div>
  )
}
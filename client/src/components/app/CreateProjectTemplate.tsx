import React, { useContext } from "react";
import classes from "./styles/AppContainer.module.css";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";

export const CreateProjectTemplate = () => {
  const request: Function = useHttp();
  const authInfo = useContext(AuthContext);
  const createProject = async (event: any) => {
    if (event.key === "Enter") {
      const projectName = event.target.value;
      const data = await request("/api/personal/create/project", "POST", {authInfo, projectName})
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
import React, { useCallback, useContext } from "react";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import addButtonLight from "./img/addButtonLight.svg";
import addButtonDark from "./img/addButtonDark.svg";
import classes from "./styles/AppContainer.module.css";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
import { IAuthInfo, IProjects } from "../../interfaces";

export const CreateProjectButton = () => {
  const request: Function = useHttp();
  const authInfo: IAuthInfo = useContext(AuthContext)
  const createNewProject = useCallback(async () => {
    try {
      const data = await request("/api/personal/create/project", "POST", {authInfo});
    } catch (error) {
      console.log("Error", error);
    }
  }, [request])

  return(
    <div className={classes.addButtonWrapper}>
      <ThemeContext.Consumer>
      {({theme}) => (
        <img src={theme === Theme.LIGHT ? addButtonLight : addButtonDark} alt="" className={classes.addButton} onClick={createNewProject} />
      )}
    </ThemeContext.Consumer>
    </div>
  )
}
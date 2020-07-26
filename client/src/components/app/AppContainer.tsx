import React, { useCallback, useState, useEffect, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./styles/AppContainer.module.css";
import { AuthContext } from "../../context/AuthContext";
import { Projects } from "./Projects";
import { IAuthInfo, IUserData, IProjects } from "../../interfaces";
import addButtonLight from "./img/addButtonLight.svg";
import addButtonDark from "./img/addButtonDark.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../context/ThemeContext";

export const AppContainer = () => {
  const request: Function = useHttp();
  const authInfo: IAuthInfo = useContext(AuthContext);
  let [userPersonalProjectsData, setUserPersonalProjectsData]: [Array<IProjects> | undefined, Function] = useState(undefined);
  const getUserData = useCallback(async () => {
    try {
      const dataFetched: IUserData = await request("/api/personal/data", "GET", null, {
        Authorization: `Bearer ${authInfo.token}`
      });
      setUserPersonalProjectsData(dataFetched.personalChannel);
    } catch (error) {
      console.log("Error", error);
    }
  }, [authInfo, request])
  useEffect(() => {
    getUserData();
  }, [fetch])
  let [projects, setProjects]: [Array<string>, Function] = useState([]);
  useEffect(() => {
    if (userPersonalProjectsData !== undefined) {
      userPersonalProjectsData.map(project => setProjects((projects: any) => [...projects, project.projectName]));
    }
  }, [userPersonalProjectsData, setProjects])
  const showTemplateCreatingProject = () => {
    console.log("New project"); 
  }
  const createNewProject = useCallback(async () => {
    try {
      const data = await request("/api/personal/create/project", "POST", {authInfo});
      console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  }, [request])
  debugger
  const renderingProjects = projects.map(project => <Projects projectName={project} key={projects.indexOf(project)} />);
  return(
    <ThemeContext.Consumer>
      {({theme, changeTheme}) => (
        <div className={theme === Theme.LIGHT ? classes.wrapper : classes.wrapperDark}>
        <div className={classes.channelsWrapper}>
          <div className={classes.default}></div>
        </div>
        <div className={classes.projectsWrapper}>
          <div className={classes.projectsContainer}>
            <div className={classes.projects}>
              <ul>
                {renderingProjects}
              </ul>
            </div>
            <div className={classes.addButtonWrapper}>
              <img src={theme === Theme.LIGHT ? addButtonLight : addButtonDark} alt="" className={classes.addButton} onClick={createNewProject} />
            </div>
          </div>
        </div>
      </div>
      )}
    </ThemeContext.Consumer>
  )
}
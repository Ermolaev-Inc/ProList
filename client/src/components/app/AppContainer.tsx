import React, { useCallback, useState, useEffect, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./styles/AppContainer.module.css";
import { AuthContext } from "../../context/AuthContext";
import { Projects } from "./Projects";
import { IAuthInfo, IUserData, IPersonalChannel } from "../../interfaces";
import addButtonLight from "./img/addButtonLight.svg";
import addButtonDark from "./img/addButtonDark.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../context/ThemeContext";

export const AppContainer = () => {
  const request: Function = useHttp();
  const authInfo: IAuthInfo = useContext(AuthContext);
  let [userPersonalProjectsData, setUserPersonalProjectsData]: [IPersonalChannel | undefined, Function] = useState(undefined);
  const getUserData = useCallback(async () => {
    try {
      const dataFetched: IUserData = await request("/api/data", "GET", null, {
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
      for (let key in userPersonalProjectsData) {
        setProjects((projects: any) => [...projects, key]);
      }
    }
  }, [userPersonalProjectsData])
  const showTemplateCreatingProject = () => {
    console.log("New project"); 
  }

  const renderingProjects = projects.map(project => <Projects projectName={project} id={projects.indexOf(project)} />);
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
              <img src={theme === Theme.LIGHT ? addButtonLight : addButtonDark} alt="" className={classes.addButton} onClick={showTemplateCreatingProject} />
            </div>
          </div>
        </div>
      </div>
      )}
    </ThemeContext.Consumer>
    
  )
}
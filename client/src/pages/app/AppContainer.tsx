import React, { useCallback, useState, useEffect, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./sass/AppContainer.module.sass";
import { AuthContext } from "../../context/AuthContext";
import { IAuthContext, IUserData, IProject, IPropsAppContainer } from "../../interfaces";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../context/ThemeContext";
import { ProjectsContainer } from "./ProjectsContainer";
import { TodosContainer } from "./TodosSection/TodosContainer";
import { ChannelsContainer } from "./ChannelsContainer";

export const AppContainer = (props: IPropsAppContainer) => {
  const authInfo: IAuthContext = useContext(AuthContext);
  
  const [currentChannel, setCurrentChannel]: [string, Function] = useState("personalChannel");
  const changeCurrentChannel = () => {
    // TODO
  }

  const [currentProject, setCurrentProject]: [string | null, Function] = useState(null);
  const changeCurrentProject = (projectName: string): void => {
    setCurrentProject(projectName);
  }
  
  return(
    <ThemeContext.Consumer>
      {({theme, changeTheme}) => (
        <div className={theme === Theme.LIGHT ? classes.wrapper : classes.wrapperDark}>
          <ChannelsContainer showSettings={props.showSettings}/>
          <ProjectsContainer changeCurrentProject={changeCurrentProject}/>
          <div className={classes.todosWrapper}>
            <div className={classes.todosContainer}>

            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
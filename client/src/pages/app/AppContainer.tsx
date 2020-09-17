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
  const request: Function = useHttp();
  const authInfo: IAuthContext = useContext(AuthContext);
  
  const [currentChannel, setCurrentChannel]: [string, Function] = useState("personalChannel");
  const [currentProject, setCurrentProject]: [string | null, Function] = useState(null);

  const changeCurrentChannel = () => {
    // TODO
  }
  const changeCurrentProject = (projectName: string): void => {
    setCurrentProject(projectName);
  }



  
  const createProject = async (event: any): Promise<void> => {
    if (event.key === "Enter") {
      const projectName: string = event.target.value;
      await request("/api/personal/create/project", "POST", {authInfo, projectName});
      window.location.reload();
    }
  }
 
  let [todos, setTodos]: [any, Function] = useState([]);
  let [selectedProjectName, setSelectedProjectName] = useState("");
  const renderProjectTodos = (projectName: string) => {
    setSelectedProjectName(projectName);
    getProjectTodos(projectName);
  }
  const clearTodosSection = () => {
    setTodos([]);
    setSelectedProjectName("");
  }
  const getProjectTodos = useCallback(async (projectName: string) => {
    try {
      const dataFetched = await request(`api/personal/todos/${projectName}`, "GET", null, {
        Authorization: `Bearer ${authInfo.token}`
      });
      setTodos(dataFetched);
    } catch (error) {
      console.log("Error", error);
    }
  }, [authInfo, request])
  return(
    <ThemeContext.Consumer>
      {({theme, changeTheme}) => (
        <div className={theme === Theme.LIGHT ? classes.wrapper : classes.wrapperDark}>
          <ChannelsContainer showSettings={props.showSettings}/>
          <ProjectsContainer changeCurrentProject={changeCurrentProject}/>
          <div className={classes.todosWrapper}>
            <div className={classes.todosContainer}>
              <TodosContainer todos={todos} title={selectedProjectName} />
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
import React, { useCallback, useState, useEffect, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./styles/AppContainer.module.css";
import { AuthContext } from "../../context/AuthContext";
import { Projects } from "./ProjectsSection/Projects";
import { IAuthContext, IUserData, IProject, ITodo } from "../../interfaces";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../context/ThemeContext";
import { CreateProjectButton } from "./ProjectsSection/CreateProjectButton";
import { CreateProjectTemplate } from "./ProjectsSection/CreateProjectTemplate";
import { TodosContainer } from "./TodosSection/TodosContainer";
import { ChannelsContainer } from "./ChannelsSection/ChannelsContainer";

export const AppContainer = () => {
  const request: Function = useHttp();
  const authInfo: IAuthContext = useContext(AuthContext);
  let [userPersonalProjectsData, setUserPersonalProjectsData]: [IProject[] | undefined, Function] = useState(undefined);
  let [projects, setProjects]: [string[], Function] = useState([]);
  const getUserData = useCallback(async (): Promise<void> => {
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
  useEffect(() => {
    if (userPersonalProjectsData !== undefined) {
      userPersonalProjectsData.map(project => setProjects((projects: IProject[]) => [...projects, project.projectName]));
    }
  }, [userPersonalProjectsData, setProjects])
  let [isProjectCreating, setProjectCreating]: [boolean, Function] = useState(false);
  const showCreatePrjectTemplate = (): void => {
    setProjectCreating(true);
  }
  const createProject = async (event: any): Promise<void> => {
    if (event.key === "Enter") {
      const projectName: string = event.target.value;
      await request("/api/personal/create/project", "POST", {authInfo, projectName});
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
  const renderingProjects = projects.map((projectName: string, index: number) => <Projects projectName={projectName} key={index} renderProjectTodos={renderProjectTodos} clearTodosSection={clearTodosSection} />);
  return(
    <ThemeContext.Consumer>
      {({theme, changeTheme}) => (
        <div className={theme === Theme.LIGHT ? classes.wrapper : classes.wrapperDark}>
          <ChannelsContainer />
          <div className={classes.projectsWrapper}>
            <div className={classes.projectsContainer}>
              <div className={classes.projects}>
                <ul>
                  {renderingProjects}
                  {isProjectCreating && <CreateProjectTemplate createProject={createProject} />} 
                </ul>
              </div>
              <CreateProjectButton showCreatePrjectTemplate={showCreatePrjectTemplate}/>
            </div>
          </div>
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
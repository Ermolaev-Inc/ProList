import React, { useCallback, useState, useEffect, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./styles/AppContainer.module.css";
import { AuthContext } from "../../context/AuthContext";
import { Projects } from "./Projects";
import { IAuthContext, IUserData, IProject } from "../../interfaces";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../context/ThemeContext";
import { CreateProjectButton } from "./CreateProjectButton";
import { CreateProjectTemplate } from "./CreateProjectTemplate";

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
  const renderProjectTodos = (projectName: string) => {
    getProjectTodos(projectName);
    //TODO
  }
  const getProjectTodos = useCallback(async (projectName: string) => {
    try {
      const dataFetched = await request(`api/personal/todos/${projectName}`, "GET", null, {
        Authorization: `Bearer ${authInfo.token}`
      });
      //TODO
    } catch (error) {
      console.log("Error", error);
    }
  }, [authInfo, request])
  const renderingProjects = projects.map((projectName: string, index: number) => <Projects projectName={projectName} key={index} renderProjectTodos={renderProjectTodos} />);
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
                  {isProjectCreating && <CreateProjectTemplate createProject={createProject} />} 
                </ul>
              </div>
              <CreateProjectButton showCreatePrjectTemplate={showCreatePrjectTemplate}/>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
import React, { useState, useEffect, useCallback, useContext } from "react";
import { AddButton } from "../../components/AddButton/AddButton";
import s from "./sass/AppContainer.module.sass";
import { Project } from "./Project";
import { IUserData, IAuthContext, IProjectsContainerProps, IProject } from "../../interfaces";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
import { CreateProjectTemplate } from "../../templates/CreateProjectTemplate";
import { Theme, ThemeContext } from "../../context/ThemeContext";

export const ProjectsContainer: React.FC<IProjectsContainerProps> = ({ 
  channelName,
  changeCurrentProject
 }) => {
  const request = useHttp();
  const themeContext = useContext(ThemeContext);
  const authInfo: IAuthContext = useContext(AuthContext);
  
  const [projects, setProjects]: [any, Function] = useState([]);
  const [isProjectCreating, setProjectCreating]: [boolean, Function] = useState(false);
  
  const getUserProjects = useCallback(async (): Promise<void> => {
    try {
      const fetchedData: IUserData = await request(`/api/data/${channelName}`, "GET", null, {
        Authorization: `Bearer ${authInfo.token}`
      })
      setProjects(fetchedData.personalChannel);
    } catch (error) {
      console.log("Error", error);
    }
  }, [authInfo, request])

  const createProject = useCallback(async (event: any): Promise<void> => {
    if (event.key === "Enter") {
      const projectName: string = event.target.value;
      await request("/api/create/project", "POST", {authInfo, projectName});
      setProjectCreating(false);
    }
  }, [request, authInfo])

  useEffect(() => {
    getUserProjects();
  }, [isProjectCreating])

  return(
    <div className={s.projectsWrapper}>
      <div className={s.projectsContainer}>
        <div className={s.projects}>
          <ul>
            { projects.map((project: IProject, index: number) => <Project projectName={project.projectName} key={index} changeCurrentProject={changeCurrentProject} />) }
            { isProjectCreating && <CreateProjectTemplate createProject={createProject} /> }
          </ul>
        </div>
        <div className={s.addButtonWrapper}>
          <AddButton onClick={ () => { setProjectCreating(true) } } className={s.addButton} color={themeContext.theme === Theme.LIGHT ? "#000000" : "#ffffff"}/>
        </div>
      </div>
    </div>
  )
}
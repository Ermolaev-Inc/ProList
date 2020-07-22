import React, { useCallback, useState, useEffect, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./styles/AppContainer.module.css";
import { AuthContext } from "../../context/AuthContext";
import { Projects } from "./Projects";
import { IAuthInfo, IUserData, IPersonalChannel } from "../../interfaces";

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
  const renderingProjects = projects.map(project => <Projects projectName={project} id={projects.indexOf(project)} />);
  return(
    <div className={classes.wrapper}>
      <div className={classes.channelsForm}>
        <div className={classes.default}></div>
      </div>
      <div className={classes.projectsForm}>
          {renderingProjects}
      </div>
    </div>
  )
}
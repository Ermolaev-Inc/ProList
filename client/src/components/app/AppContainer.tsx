import React, { useCallback, useState, useEffect, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./styles/AppContainer.module.css";
import { AuthContext } from "../../context/AuthContext";
import { ProjectsRendering } from "./ProjectsRendering";

export const AppContainer = (props: any) => {
  const request: Function = useHttp();
  const token = useContext(AuthContext);
  let [data, setData]: [any, Function] = useState(undefined);
  const fetch = useCallback(async () => {
    try {
      const dataFetched = await request("/api/data", "GET", null, {
        Authorization: `Bearer ${token.token}`
      });
      setData(dataFetched.personalChannel);
    } catch (error) {
      console.log("Error", error);
    }
  }, [token, request])
  useEffect(() => {
    fetch();
  }, [fetch])
  let [projects, setProjects] = useState("Lol");
  useEffect(() => {
    if (data != undefined) {
      console.log(data);
      
      setProjects(data.default.map((element: { name: string; }) => <ProjectsRendering projectName={element.name}/>));
    }
  }, [data])
  return(
    <div className={classes.channelForm}>
      {projects}
    </div>
  )
}
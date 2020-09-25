import React, { useContext, useState } from "react";
import s from "./sass/AppContainer.module.sass";
import { IAppContainerProps } from "../../interfaces";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import { ChannelsContainer } from "./ChannelsContainer";
import { ProjectsContainer } from "./ProjectsContainer";
import { TodosContainer } from "./TodosContainer";

export const AppContainer: React.FC<IAppContainerProps> = ({ showSettings }) => {
  const themeContext = useContext(ThemeContext);

  const [currentChannel, setCurrentChannel]: [string, Function] = useState("Personal");
  const changeCurrentChannel = (channelName: string): void => {
    setCurrentChannel(channelName);
  }

  const [currentProject, setCurrentProject]: [string, Function] = useState("");
  const changeCurrentProject = (projectName: string): void => {
    setCurrentProject(projectName);
  }
  
  return(
    <div className={themeContext.theme === Theme.LIGHT ? s.wrapper : s.wrapperDark}>
      <ChannelsContainer changeCurrentChannel={changeCurrentChannel} showSettings={showSettings} />
      <ProjectsContainer changeCurrentProject={changeCurrentProject} channelName={currentChannel} />
      <TodosContainer channelName={currentChannel} projectName={currentProject}/>
    </div>
  )
}
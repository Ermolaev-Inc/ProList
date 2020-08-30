import React, { useContext } from "react";
import s from "./sass/CreateChannelTemplate.module.sass";
import { ThemeContext, Theme } from "../../context/ThemeContext";

export const CreateChannelTemplate = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  return(
    <div className={theme === Theme.LIGHT ? s.light : s.dark}>
      <input type="text" className={s.channelName} placeholder="Channel name"/>
      <input type="password" className={s.channelName} placeholder="Password"/>
      <div></div>
    </div>
  )
}
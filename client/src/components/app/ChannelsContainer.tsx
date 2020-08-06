import React, { useContext } from "react";
import classes from "./styles/ChannelsContainer.module.css";
import { ThemeContext, Theme } from "../../context/ThemeContext";

export const ChannelsContainer = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  return(
    <div className={theme === Theme.LIGHT ? classes.channelsWrapper : classes.channelsWrapperDark}>
      <div className={classes.default}></div>
    </div>
  )
}
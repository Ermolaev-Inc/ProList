import React, { useContext } from "react";
import classes from "../styles/ChannelsContainer.module.css";
import { ThemeContext, Theme } from "../../../context/ThemeContext";
import { useHttp } from "../../../hooks/http.hook";
import { SettingsButton } from "./SettingsButton";

export const ChannelsContainer = () => {
  const request: Function = useHttp();
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  //TODO
  //const createChannel = async () => {
    //await request("/api/channels/create", "POST", null, {});
  //}
  return(
    <div className={theme === Theme.LIGHT ? classes.channelsWrapper : classes.channelsWrapperDark}>
      <div className={classes.default}></div>
      <SettingsButton />
    </div>
  )
}
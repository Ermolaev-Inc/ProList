import React, { useContext, useState } from "react";
import classes from "../styles/ChannelsContainer.module.css";
import { ThemeContext, Theme } from "../../../context/ThemeContext";
import { useHttp } from "../../../hooks/http.hook";
import { SettingsButton } from "./SettingsButton";
import { IPropsChannelsContainer } from "../../../interfaces";

export const ChannelsContainer = (props: IPropsChannelsContainer) => {
  const request: Function = useHttp();
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  let [isSettings, setSettings] = useState(false);
  const showSettings = (): void => {
    setSettings(true);
  }
  //TODO
  //const createChannel = async () => {
    //await request("/api/channels/create", "POST", null, {});
  //}
  return(
    <div className={theme === Theme.LIGHT ? classes.channelsWrapper : classes.channelsWrapperDark}>
      <div className={classes.default}></div>
      <SettingsButton showSettings={props.showSettings}/>
    </div>
  )
}
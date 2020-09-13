import React, { useContext, useState } from "react";
import s from "../sass/ChannelsContainer.module.sass";
import { ThemeContext, Theme } from "../../../context/ThemeContext";
import { useHttp } from "../../../hooks/http.hook";
import { SettingsButton } from "../../../components/SettingsButton/SettingsButton";
import { IPropsChannelsContainer } from "../../../interfaces";

export const ChannelsContainer = (props: IPropsChannelsContainer) => {
  const request: Function = useHttp();
  const themeContext = useContext(ThemeContext);

  return(
    <div className={themeContext.theme === Theme.LIGHT ? s.channelsWrapper : s.channelsWrapperDark}>
      <div className={s.default}></div>
      <SettingsButton onClick={props.showSettings} color={themeContext.theme === Theme.LIGHT ? "#000000" : "#ffffff"}/>
    </div>
  )
}
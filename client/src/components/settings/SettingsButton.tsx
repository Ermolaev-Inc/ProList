import React, { useContext } from "react";
import settingsLight from "./img/settingsLight.svg";
import settingsDark from "./img/settingsDark.svg";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import { IPropsSettingsButton } from "../../interfaces";

export const SettingsButton = (props: IPropsSettingsButton) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  return(
    <>
      <img onClick={props.showSettings} src={theme === Theme.LIGHT ? settingsLight : settingsDark} alt=""/>
    </>
  )
}
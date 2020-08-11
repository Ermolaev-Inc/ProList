import React, { useContext } from "react";
import settingsLight from "../img/settingsLight.svg";
import settingsDark from "../img/settingsDark.svg";
import { ThemeContext, Theme } from "../../../context/ThemeContext";

export const SettingsButton = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  return(
    <>
      <img src={theme === Theme.LIGHT ? settingsLight : settingsDark} alt=""/>
    </>
  )
}
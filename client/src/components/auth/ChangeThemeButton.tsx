import React, { useState } from "react";
import classes from "./css/ChangeThemeButton.module.css";
import { IPropsChangeThemeButton } from "../../interfaces";
import { ThemeContext, Theme } from "../../context/ThemeContext";

export const ChangeThemeButton = (props: IPropsChangeThemeButton) => {

  let [buttonStyle, setButtonStyle] = useState(props.theme === Theme.LIGHT ? classes.light : classes.dark);
  const changeTheme = () => {
    props.changeTheme();
    if (buttonStyle === classes.light) {
      setButtonStyle(classes.dark);
    } else {
      setButtonStyle(classes.light);
    }
  }
  return(
    <div className={buttonStyle} onClick={changeTheme}></div>
  )
}
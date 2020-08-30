import React, { useState } from "react";
import classes from "./sass/ChangeThemeButton.module.sass";
import { IPropsChangeThemeButton } from "../../interfaces";
import { Theme } from "../../context/ThemeContext";


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
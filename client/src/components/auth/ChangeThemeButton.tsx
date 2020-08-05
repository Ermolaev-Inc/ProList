import React, { useState } from "react";
import classes from "./styles/ChangeThemeButton.module.css";
import { IPropsChangeThemeButton } from "../../interfaces";

export const ChangeThemeButton = (props: IPropsChangeThemeButton) => {
  let [buttonStyle, setButtonStyle] = useState(classes.light);
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
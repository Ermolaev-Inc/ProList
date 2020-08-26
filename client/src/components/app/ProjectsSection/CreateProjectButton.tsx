import React, { useContext } from "react";
import { ThemeContext, Theme } from "../../../context/ThemeContext";
import addButtonLight from "../img/addButtonLight.svg";
import addButtonDark from "../img/addButtonDark.svg";
import classes from "../sass/AppContainer.module.sass";
import { IPropsCreateProjectButton } from "../../../interfaces";

export const CreateProjectButton = (props: IPropsCreateProjectButton) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  return(
    <div className={classes.addButtonWrapper}>
      <img src={theme === Theme.LIGHT ? addButtonLight : addButtonDark} alt="" className={classes.addButton} onClick={props.showCreatePrjectTemplate} />
    </div>
  )
}
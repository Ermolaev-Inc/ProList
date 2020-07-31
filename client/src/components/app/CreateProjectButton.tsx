import React from "react";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import addButtonLight from "./img/addButtonLight.svg";
import addButtonDark from "./img/addButtonDark.svg";
import classes from "./styles/AppContainer.module.css";
import { IPropsCreateProjectButton } from "../../interfaces";

export const CreateProjectButton = (props: IPropsCreateProjectButton) => {
  return(
    <div className={classes.addButtonWrapper}>
      <ThemeContext.Consumer>
      {({theme}) => (
        <img src={theme === Theme.LIGHT ? addButtonLight : addButtonDark} alt="" className={classes.addButton} onClick={props.showCreatePrjectTemplate} />
      )}
      </ThemeContext.Consumer>
    </div>
  )
}
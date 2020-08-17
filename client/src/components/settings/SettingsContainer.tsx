import React, { useContext } from "react";
import classes from "./css/SettingsContainer.module.css";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import closeButtonLight from "./img/closeButtonLight.svg";
import closeButtonDark from "./img/closeButtonDark.svg";
import { IPropsSettingsContainer } from "../../interfaces";
import { useLogout } from "../../hooks/logout.hook";

export const SettingsContainer = (props: IPropsSettingsContainer) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  const changeTheme = themeContext.changeTheme;
  const {logout} = useLogout();
  return(
    <div className={theme === Theme.LIGHT ? classes.wrapper : classes.wrapperDark}>
      <div className={classes.titlesSectionWrapper}>
        <div className={classes.titlesSection}>
          <span>Create a new channel</span>
          <span onClick={changeTheme}>Change theme</span>
          <span className={classes.logoutButton} onClick={logout} >Logout</span>
        </div>
      </div>
      <img className={classes.closeButton} src={theme === Theme.LIGHT ? closeButtonLight : closeButtonDark} alt="" onClick={props.closeSettings} />
    </div>
  )
}
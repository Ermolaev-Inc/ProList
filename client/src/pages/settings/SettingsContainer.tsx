import React, { useContext, useState } from "react";
import classes from "./sass/SettingsContainer.module.sass";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import closeButtonLight from "./img/closeButtonLight.svg";
import closeButtonDark from "./img/closeButtonDark.svg";
import { IPropsSettingsContainer } from "../../interfaces";
import { useLogout } from "../../hooks/logout.hook";
import { CreateChannelTemplate } from "./CreateChannelTemplate";

export const SettingsContainer = (props: IPropsSettingsContainer) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  const changeTheme = themeContext.changeTheme;
  const {logout} = useLogout();
  let [isChannelTemplate, setChannelTemplate] = useState(false);
  const showCreateChannelTemplate = (): void => {
    setChannelTemplate(true);
  }
  return(
    <div className={theme === Theme.LIGHT ? classes.wrapper : classes.wrapperDark}>
      <div className={classes.titlesSectionWrapper}>
        <div className={classes.titlesSection}>
          <span onClick={showCreateChannelTemplate}>Create a channel</span>
          <span onClick={changeTheme}>Change theme</span>
          <span className={classes.logoutButton} onClick={logout} >Logout</span>
        </div>
      </div>
      {isChannelTemplate && <CreateChannelTemplate />}
      <img className={classes.closeButton} src={theme === Theme.LIGHT ? closeButtonLight : closeButtonDark} alt="" onClick={props.closeSettings} />
    </div>
  )
}
import React, { useContext, useState } from "react";
import s from "./sass/SettingsContainer.module.sass";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import closeButtonLight from "./img/closeButtonLight.svg";
import closeButtonDark from "./img/closeButtonDark.svg";
import { IPropsSettingsContainer } from "../../interfaces";
import { useLogout } from "../../hooks/logout.hook";
import { CreateChannelTemplate } from "./CreateChannelTemplate";

export const SettingsContainer = (props: IPropsSettingsContainer) => {
  const themeContext = useContext(ThemeContext);
  const logout = useLogout();

  const [isChannelTemplate, setChannelTemplate] = useState(false);
  const showCreateChannelTemplate = (): void => {
    setChannelTemplate(true);
  }

  return(
    <div className={themeContext.theme === Theme.LIGHT ? s.wrapper : s.wrapperDark}>
      <div className={s.titlesSectionWrapper}>
        <div className={s.titlesSection}>
          <span onClick={showCreateChannelTemplate}>Create a channel</span>
          <span onClick={themeContext.changeTheme}>Change theme</span>
          <span className={s.logoutButton} onClick={logout}>Logout</span>
        </div>
      </div>
      {isChannelTemplate && <CreateChannelTemplate />}
      <img className={s.closeButton} src={themeContext.theme === Theme.LIGHT ? closeButtonLight : closeButtonDark} alt="" onClick={props.closeSettings} />
    </div>
  )
}
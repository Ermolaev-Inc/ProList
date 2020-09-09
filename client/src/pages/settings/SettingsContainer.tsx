import React, { useContext, useState } from "react";
import s from "./sass/SettingsContainer.module.sass";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import { IPropsSettingsContainer } from "../../interfaces";
import { useLogout } from "../../hooks/logout.hook";
import { CreateChannelTemplate } from "./CreateChannelTemplate";
import { CloseButton } from "../../components/CloseButton/CloseButton";

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
      <CloseButton color={themeContext.theme === Theme.LIGHT ? "#C4C4C4" : "#545454"} className={s.closeButton} onClick={props.closeSettings} />
    </div>
  )
}
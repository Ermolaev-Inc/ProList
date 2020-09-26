import React, { useCallback, useContext, useEffect, useState } from "react";
import s from "./sass/ChannelsContainer.module.sass";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import { SettingsButton } from "../../components/SettingsButton/SettingsButton";
import { IChannelsContainerProps } from "../../interfaces";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
import { Channel } from "./Channel";

export const ChannelsContainer: React.FC<IChannelsContainerProps> = ({ 
  showSettings,
  changeCurrentChannel
}) => {
  const request = useHttp();
  const authInfo = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);

  const [channels, setChannels]: [string[], Function] = useState([]);

  const getUserChannels = useCallback(async (): Promise<void> => {
    try {
      const fetchedData = await request("/api/data/initial", "GET", null, {
        Authorization: `Bearer ${authInfo.token}`
      })
      setChannels(fetchedData);
    } catch (error) {
      console.log("Error", error);
    }
  }, [])

  useEffect(() => {
    getUserChannels();
  }, [getUserChannels, authInfo, request])

  return(
    <div className={themeContext.theme === Theme.LIGHT ? s.channelsWrapper : s.channelsWrapperDark}>
      <div className={s.channelForm}>
        { channels.map((channelName: string, index: number) => <Channel channelName={channelName} key={index} changeCurrentChannel={changeCurrentChannel} />)}
      </div>
      <SettingsButton onClick={showSettings} color={themeContext.theme === Theme.LIGHT ? "#000000" : "#ffffff"}/>
    </div>
  )
}
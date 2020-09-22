import React, { useContext, useState } from "react";
import s from "./CreateChannelTemplate.module.sass";
import { ThemeContext, Theme } from "../context/ThemeContext";
import { NeonButton } from "../components/NeonButton/NeonButton";
import { useHttp } from "../hooks/http.hook";
import { IAuthContext } from "../interfaces";
import { AuthContext } from "../context/AuthContext";

export const CreateChannelTemplate = () => {
  const request: Function = useHttp();
  const {userId} = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);

  const [channelName, setChannelName]: [string, Function] = useState("");
  const [password, setPassword]: [string, Function] = useState("");

  const channelNameInputHandler = (event: any): void => {
    setChannelName(event.target.value);
  }
  const passwordInputHandler = (event: any): void => {
    setPassword(event.target.value);
  }

  const createChannelHandler = () => {
    try {
      const data = request("/api/create/channel", "POST", {channelName, password, userId});
      // TODO: error/success UI handler 
    } catch (error) {
      console.log("Error", error);
    }
  }

  return(
    <div className={themeContext.theme === Theme.LIGHT ? s.light : s.dark}>
      <form>
        <input type="text" className={s.channelName} placeholder="Channel name" onChange={channelNameInputHandler}/>
        <input type="password" className={s.channelName} placeholder="Password" onChange={passwordInputHandler}/>
      </form>
      <NeonButton title="Create" className={s.createButton} onClick={createChannelHandler}/>
    </div>
  )
}
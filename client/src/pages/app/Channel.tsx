import React from "react";
import { IChannelProps } from "../../interfaces";
import s from "./sass/ChannelsContainer.module.sass";

export const Channel: React.FC<IChannelProps> = ({
  channelName,
  changeCurrentChannel
}) => {
  return(
    <div className={s.default} onClick={() => { changeCurrentChannel(channelName); console.log("Changed") }} />
  )
}
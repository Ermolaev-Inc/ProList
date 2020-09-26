import React, { useState } from "react";
import { IChannelProps } from "../../interfaces";
import s from "./sass/ChannelsContainer.module.sass";

export const Channel: React.FC<IChannelProps> = ({
  channelName,
  changeCurrentChannel
}) => {
  const [isHover, setHover] = useState(false);
  const mouseHoverHandler = (): void => {
    setHover(!isHover);
  }

  return(
    <div className={s.channel}>
      <div className={s.default} onClick={() => { changeCurrentChannel(channelName) }} onMouseEnter={ mouseHoverHandler } onMouseLeave={ mouseHoverHandler } />
      <div className={isHover === true ? s.badgeForm : ""}>
        <span className={s.badgeName}>{isHover && channelName}</span>
      </div>
    </div>
  )
}
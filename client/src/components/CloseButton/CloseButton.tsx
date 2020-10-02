import React from "react";
import { CloseButtonProps } from "./interfaces";

export const CloseButton: React.FC<CloseButtonProps> = ({
  color,
  onClick,
  ...props
}) => {
  return(
    <svg {...props} onClick={onClick} 
    width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7.7782" y="10.6066" width="4" height="26" rx="2" transform="rotate(-45 7.7782 10.6066)" fill={color}/>
    <rect x="10.6066" y="28.9913" width="4" height="26" rx="2" transform="rotate(-135 10.6066 28.9913)" fill={color}/>
    </svg>
  )
}
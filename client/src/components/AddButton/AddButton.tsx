import React from "react";
import { AddButtonProps } from "./interfaces";

export const AddButton: React.FC<AddButtonProps> = ({
  color = "#000000",
  onClick,
  ...props
}) => {
  return(
    <svg {...props} style={{cursor: "pointer"}} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11" width="4" height="26" rx="2" fill={color}/>
    <rect y="15" width="4" height="26" rx="2" transform="rotate(-90 0 15)" fill={color}/>
    </svg>

  )
}
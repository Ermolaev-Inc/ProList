import React from "react";
import styled from "styled-components";
import { NeonButtonProps } from "./interfaces";

export const NeonButton: React.FC<NeonButtonProps> = ({
  title = "OK",
  color = "#79C7FF",
  fontWeight = "500",
  fontSize = "18px",
  ...props
}) => {
  const Button = styled.div`
  font-family: "Roboto";
  font-weight: ${fontWeight};
  display: inline-block;
  border: 0;
  border-radius: 10px;
  text-decoration: none;
  font-size: ${fontSize};
  overflow: hidden;
  transition: 0.2s;
  padding: 15px 30px;
  cursor: pointer;
  `

  const mouseHoverHandler = (event: any) => {
    event.target.style.background = `${color}`;
    event.target.style.boxShadow = `0 0 10px ${color}, 0 0 40px ${color}, 0 0 80px ${color}`;
    event.target.style.color = "#ffffff";
  }
  const mouseLeaveHandler = (event: any) => {
    event.target.style.background = "";
    event.target.style.boxShadow = "";
    event.target.style.color = `${color}`;
  }

  return(
    <Button onMouseEnter={mouseHoverHandler} style={{ color }} onMouseLeave={mouseLeaveHandler} {...props} >
      { title }
    </Button>
  )
}

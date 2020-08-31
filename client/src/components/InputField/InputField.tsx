import React from "react";
import styled from "styled-components";
import { InputFieldProps } from "./interfaces";

export const InputField: React.FC<InputFieldProps> = ({
  placeholder = "Input",
  onChange,
  styles = {
    width: "40%",
    borderColor: "#C4C4C4",
    borderColorFocus: "#FF6565",
    fontSize: "32px",
    fontWeight: "100"
  },
  ...props
}) => {

  const Input = styled.input`
  font-family: Roboto;
  font-weight: ${styles.fontWeight};
  font-size: ${styles.fontSize};
  line-height: 42px;
  width: ${styles.width};
  height: 35px;
  border-bottom-width: 1px;
  border-color: ${styles.borderColor};
  border-right-width: 0px;
  border-top-width: 0px;
  border-left-width: 0px;
  :focus {
    border-color: ${styles.borderColorFocus};
  }
  `
  
  return(
    <Input
      type="text" 
      placeholder={placeholder} 
      onChange={onChange} 
      {...props}
    />
  )
}
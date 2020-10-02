import React from "react";
import s from "./styles.module.sass";

export const Loader: React.FC = () => {
  return(
    <div className={s.loader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
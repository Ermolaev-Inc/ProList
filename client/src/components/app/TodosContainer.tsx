import React from "react";
import classes from "./styles/TodosContainer.module.css";

export const TodosContainer = (props: any) => {

  return(
    <>
      <div className={classes.title}>{props.title}</div>
    </>
  )
}
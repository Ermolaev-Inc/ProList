import React, { useState } from "react";
import { IPropsTodos } from "../../../interfaces";
import classes from "../sass/Todos.module.sass";
import { Status } from "../../../statuses";

export const Todos = (todo: IPropsTodos) => {
  let [statusCircle, setStatusCircle] = useState(todo.status);
  const identifyStatus = (): string => {
    switch (statusCircle) {
      case Status.COMPLETED:
        return classes.completed;
      case Status.IN_PROGRESS:
        return classes.inProgress;
      case Status.NOT_STARTED:
        return classes.notStarted;
      default:
        return "Error";
    }
  }
  return(
    <li className={classes.todo}>
      <div className={identifyStatus()}></div>
      <span className={classes.name}>{todo.name}</span>
    </li>
  )
}
import React, { useState } from "react";
import { IPropsTodos } from "../../interfaces";
import classes from "./styles/Todos.module.css";
import { Status } from "../../statuses";

export const Todos = (todo: IPropsTodos) => {
  let [statusCircle, setStatusCircle] = useState(todo.status);
  const identifyStatus = (): string => {
    // TODO: use case
    if (statusCircle === Status.COMPLETED) {
      return classes.completed;
    } else if (statusCircle === Status.IN_PROGRESS) {
      return classes.inProgress;
    } else {
      return classes.notStarted;
    }
  }
  return(
    <li className={classes.todo}>
      <div className={identifyStatus()}></div>
      <span className={classes.name}>{todo.name}</span>
    </li>
  )
}
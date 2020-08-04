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
    <li>
      <div className={identifyStatus()}></div>
      {todo.name}
    </li>
  )
}
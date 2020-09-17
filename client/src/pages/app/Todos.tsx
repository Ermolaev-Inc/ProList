import React, { useState } from "react";
import { ITodo } from "../../interfaces";
import s from "./sass/Todos.module.sass";
import { Status } from "../../statuses";

export const Todos: React.FC<ITodo> = ({
  name,
  description,
  status,
  timeInProgress
}) => {
  let [statusCircle, setStatusCircle] = useState(status);

  const identifyStatus = (): string => {
    switch (statusCircle) {
      case Status.COMPLETED:
        return s.completed;
      case Status.IN_PROGRESS:
        return s.inProgress;
      case Status.NOT_STARTED:
        return s.notStarted;
      default:
        throw Error("Todo has not status");
    }
  }

  return(
    <li className={s.todo}>
      <div className={identifyStatus()}></div>
      <span className={s.name}>{name}</span>
    </li>
  )
}
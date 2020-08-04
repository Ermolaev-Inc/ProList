import React from "react";
import classes from "./styles/TodosContainer.module.css";
import { IPropsTodosContainer } from "../../interfaces";
import { Todos } from "./Todos";

export const TodosContainer = (props: IPropsTodosContainer) => {
  debugger
  const todos = props.todos.map((todo: any) => <Todos todoName={todo.name}/>)
  return(
    <>
      <div className={classes.title}>{props.title}</div>
      {todos}
    </>
  )
}
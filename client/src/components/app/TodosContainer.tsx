import React from "react";
import classes from "./styles/TodosContainer.module.css";
import { IPropsTodosContainer, ITodo } from "../../interfaces";
import { Todos } from "./Todos";

export const TodosContainer = (props: IPropsTodosContainer) => {
  debugger
  const todos = props.todos.map((todo: ITodo) => <Todos todoName={todo.name}/>)
  return(
    <>
      <div className={classes.title}>{props.title}</div>
      {todos}
    </>
  )
}
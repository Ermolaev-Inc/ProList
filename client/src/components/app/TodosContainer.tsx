import React, { useContext } from "react";
import classes from "./styles/TodosContainer.module.css";
import { IPropsTodosContainer, ITodo } from "../../interfaces";
import { Todos } from "./Todos";
import { ThemeContext, Theme } from "../../context/ThemeContext";

export const TodosContainer = (props: IPropsTodosContainer) => {
  const themeContext = useContext(ThemeContext);
  const todos = props.todos.map((todo: ITodo, index: number) => <Todos todoName={todo.name} key={index} />)
  return(
    <div className={themeContext.theme === Theme.LIGHT ? classes.light : classes.dark}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.todos}>
        <ul>
          {todos}
        </ul>
      </div>
    </div>
  )
}
import React, { useCallback, useContext, useEffect, useState } from "react";
import s from "./sass/TodosContainer.module.sass";
import { ITodosContainerProps, ITodo, IAuthContext } from "../../interfaces";
import { Todos } from "./Todos";
import { ThemeContext, Theme } from "../../context/ThemeContext";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";

export const TodosContainer: React.FC<ITodosContainerProps> = ({ 
  channelName,
  projectName
}) => {
  const request = useHttp();
  const authInfo: IAuthContext = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);

  const [todos, setTodos]: [ITodo[], Function] = useState([]);

  const getProjectTodos = useCallback(async (): Promise<void> => {
    try {
      const fetchedData = await request(`api/data/${channelName}/${projectName}`, "GET", null, {	
        Authorization: `Bearer ${authInfo.token}`	
      });	
      setTodos(fetchedData);
    } catch (error) {
      console.log("Error", error);
    }
  }, [request, authInfo, projectName])

  const clearTodosSection = useCallback(() => {
    if (projectName === "") {
      setTodos([]);
    }
  }, [projectName]) 

  useEffect(() => {
    getProjectTodos();
    clearTodosSection();
  }, [getProjectTodos, clearTodosSection])
  
  return(
    <div className={themeContext.theme === Theme.LIGHT ? s.light : s.dark}>
      <div className={s.todosWrapper}>
        <div className={s.todosContainer}>
          <div className={s.title}>{projectName}</div>
          <div className={s.todos}>
            <ul>
              { todos.map((todo: ITodo, index: number) => <Todos name={todo.name} description={todo.description} status={todo.status} timeInProgress={todo.timeInProgress} key={index} />) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
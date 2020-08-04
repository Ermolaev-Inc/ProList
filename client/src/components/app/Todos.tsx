import React from "react";
import { IPropsTodos } from "../../interfaces";

export const Todos = (todo: IPropsTodos) => {
  
  return(
    <li>
      {todo.name}
    </li>
  )
}
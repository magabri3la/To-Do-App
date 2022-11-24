import React from 'react';
import { ToDoContext } from '../Context/Context';
import style from './ToDoCounter.module.css';

function ToDoCounter () {
  const { toDos } = React.useContext(ToDoContext);

  return (
    <p className={style.counterToDo}>Tasks for today - {toDos.length}</p>
  )
}

export { ToDoCounter };
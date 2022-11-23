import React from 'react'
import { ToDoContext } from '../Context/Context';

function ToDoCounter () {
  const { toDos, completedToDos } = React.useContext(ToDoContext);

  return (
    <div>{completedToDos.length}/{toDos.length}</div>
  )
}

export {ToDoCounter};
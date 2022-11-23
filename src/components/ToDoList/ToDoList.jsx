import React from 'react'
import style from './ToDoList.module.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoContext } from '../Context/Context';

function ToDoList () {
  const {
    error,
    loading,
    searchedToDos,
    onCompletedToDo,
    onDeleteToDo
  } = React.useContext(ToDoContext);

  return (
    <div className={style.toDoListContainer}>
      {error && <p>Ocurrío un error</p>}    
      {loading && <p>Cargando...</p>}  
      {(!loading && !searchedToDos.length) && <p>Agrega tu primer To Do</p>}      
      {searchedToDos.map((toDo, index) => (
        <ToDoItem 
          key={index} 
          text={toDo.text} 
          completed={toDo.completed}
          onCompleted={onCompletedToDo} 
          onDelete={onDeleteToDo} 
        />
      ))}
    </div>
  )
}

export { ToDoList };
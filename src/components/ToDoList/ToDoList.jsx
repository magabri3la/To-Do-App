import React from 'react'
import style from './ToDoList.module.css';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoContext } from '../Context/Context';

function ToDoList () {
  const {
    error,
    loading,
    searchValue,
    pendingToDos,
    searchedToDos,
    completedToDos,
    onCompletedToDo,
    onDeleteToDo
  } = React.useContext(ToDoContext);

  return (
    <div className={style.toDoListContent}>
      {error && <p>Ocurrío un error</p>}    
      {loading && <p>Cargando...</p>}  
      {(!loading && !searchedToDos.length && !pendingToDos.length) && (
        <p>Add a To-Do</p>
      )}
      {(!loading && !!searchedToDos.length) && (
        <p className={`${style.title} ${style.purple}`}>Pending</p>
      )}
      {(!loading && !!searchValue && !searchedToDos.length) && (
        <p className={`${style.title} ${style.center}`}>Search not found</p>
      )}
      <div className={style.toDoListContainer}>
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
      {(!loading && !!completedToDos.length) && (
        <p className={`${style.title} ${style.green}`}>Done</p>
      )}
      <div className={style.toDoListContainer}>
        {completedToDos.map((toDo, index) => (
          <ToDoItem 
            key={index} 
            text={toDo.text} 
            completed={toDo.completed}
            onCompleted={onCompletedToDo} 
            onDelete={onDeleteToDo} 
          />
        ))}
      </div>
    </div>
  )
}

export { ToDoList };
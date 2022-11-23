import React from 'react'
import { ToDoItem } from '../ToDoItem/ToDoItem';
import style from './ToDoList.module.css';

function ToDoList({ toDoList, onCompleted, onDelete }) {

  return (
    <div className={style.toDoListContainer}>
      {toDoList.map((toDo, index) => (
        <ToDoItem 
          key={index} 
          text={toDo.text} 
          completed={toDo.completed}
          onCompleted={onCompleted} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  )
}

export {ToDoList};
import React from 'react'
import { ToDoItem } from '../ToDoItem/ToDoItem';
import style from './ToDoList.module.css';

const ToDos = [
  {
    text : "Contar cebolla como demente para toda la semana",
    conpleted : false
  },
  {
    text : "Terminar curso de React Fundamentals Platzi",
    conpleted : true
  },
  {
    text : "Buscar canasta navideña en rimac",
    conpleted : false
  },
];

function ToDoList() {

  const onCompleted = (item) => {
    console.log('completed',item)
  }

  const onDelete = (item) => {
    console.log('delete',item)
  }

  return (
    <div className={style.toDoListContainer}>
      {ToDos.map((ToDo, index) => (
        <ToDoItem 
          key={index} 
          text={ToDo.text} 
          completed={ToDo.conpleted}
          onCompleted={() => onCompleted(ToDo)} 
          onDelete={() => onDelete(ToDo)} 
        />
      ))}
    </div>
  )
}

export {ToDoList};
import React from 'react';
import style from './ToDoItem.module.css';

function ToDoItem({completed, text, onCompleted, onDelete}) {

  let css = style.itemContainer;
  if (completed) {
    css += ` ${style.active}`;
  }
  
  return (
    <div className={css}>
      <span
        onClick={() => onCompleted(text)}
        className={style.itemIcon}>
        {completed ? '❌' : '✅'}
      </span>
      <p className={style.itemText}>{text}</p>
      <button 
      onClick={() => onDelete(text)}
      className={style.itemButton}>🗑️</button>
    </div>
  )
}

export {ToDoItem};
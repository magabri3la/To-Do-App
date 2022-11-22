import React from 'react';
import style from './CreateToDoButton.module.css';

function CreateToDoButton() {

  const onCreateToDo = () => {
    console.log('btn create to do')
  };

  return (
    <button 
    className={style.createToDoButton}
    onClick={onCreateToDo}>➕</button>
  )
}

export {CreateToDoButton};
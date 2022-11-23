import React from 'react';
import { ToDoContext } from '../Context/Context';
import style from './CreateToDoButton.module.css';

function CreateToDoButton() {
  const { setShowModal } = React.useContext(ToDoContext); 
  const onCreateToDo = () => {
    setShowModal(true)
  };

  return (
    <button 
      className={style.createToDoButton}
      onClick={onCreateToDo}>➕</button>
  )
}

export {CreateToDoButton};
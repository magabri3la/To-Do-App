import React from 'react';
import { ToDoContext } from '../Context/Context';
import style from './CreateToDoButton.module.css';

function CreateToDoButton() {
  const { showModal, setShowModal } = React.useContext(ToDoContext);

  const onCreateToDo = () => {
    setShowModal(!showModal)
  };

  return (
    <button 
      className={style.createToDoButton}
      onClick={onCreateToDo}>
      {!!showModal ? 'X' : '➕'}
      </button>
  )
}

export {CreateToDoButton};
import React from 'react';
import { ToDoContext } from '../Context/Context';
import styles from './ToDoForm.module.css';

function ToDoForm () {
  const [ newToDoValue, setNewToDoValue ] = React.useState(''); 

  const { onAddToDo, showModal, setShowModal } = React.useContext(ToDoContext);

  const onChange = (event) => {
    const value = event.target.value;
    setNewToDoValue(value)
  };

  const onDelete = () => {
    setNewToDoValue('')
    setShowModal(!showModal)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onAddToDo(newToDoValue)
    setNewToDoValue('')
    setShowModal(!showModal)
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label htmlFor="toDo" className={styles.title}>
        Write your new To do
      </label>
      <textarea 
        className={styles.textArea}
        value={newToDoValue}
        onChange={onChange}
        placeholder="I will..."
        id="toDo" 
        cols="30" 
        rows="10"/>
        <div className={styles.buttonsGroup}>
          <button type="button" onClick={onDelete}>Cancel</button>
          <button type="submit">Save</button>
        </div>
    </form>
  )
}

export { ToDoForm }
import React from 'react';
import style from './ToDoSearch.module.css';

function ToDoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className={style.toDoSearchContainer}>
      <input
        className={style.toDoSearchInput}
        type="text"
        placeholder='Busca una tarea'
        onChange={(e)=> onSearchValueChange(e)}
      />
    </div>
  )
}

export {ToDoSearch};
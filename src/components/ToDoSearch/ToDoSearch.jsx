import React from 'react';
import { ToDoContext } from '../Context/Context';
import style from './ToDoSearch.module.css';

function ToDoSearch () {
  const { setSearchValue } = React.useContext(ToDoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  };

  return (
    <div className={style.toDoSearchContainer}>
      <input
        className={style.toDoSearchInput}
        type="text"
        placeholder='Busca una tarea'
        onChange={(e)=> onSearchValueChange(e)}
      />
    </div>
  );
};

export { ToDoSearch };
import React from 'react';
import { ToDoContext } from '../Context/Context';
import style from './ToDoSearch.module.css';

function ToDoSearch () {
  const { setSearchValue } = React.useContext(ToDoContext);
  const [ activeLabel, setActiveLabel ] = React.useState(false)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  };

  let cssLabel = style.labelSearch;

  if (activeLabel) {
    cssLabel += ` ${style.active}`
  }

  return (
    <div className={style.toDoSearchContainer}>
      <label
        className={cssLabel}
        htmlFor="search">Search your task</label>
      <input
        id="search"
        className={style.toDoSearchInput}
        type="text"
        onBlur={()=> setActiveLabel(false)}
        onFocus={()=> setActiveLabel(true)}
        onChange={(e)=> onSearchValueChange(e)}
      />
    </div>
  );
};

export { ToDoSearch };
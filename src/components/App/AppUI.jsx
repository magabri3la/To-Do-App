import React from 'react'
import {ToDoCounter} from "../ToDoCounter/ToDoCounter";
import {ToDoSearch} from "../ToDoSearch/ToDoSearch";
import {ToDoList} from "../ToDoList/ToDoList";
import {CreateToDoButton} from "../CreateToDoButton/CreateToDoButton";
import {GridContainer} from "../GridContainer/GridContainer";
import style from './App.module.css';

function AppUI({
  toDos, 
  completedToDos, 
  searchValue, 
  setSearchValue, 
  searchedToDos, 
  onCompletedToDo, 
  onDeleteToDo}) {
  return (
    <main className={style.ToDoApp}>
      <GridContainer>
        <ToDoCounter
          nroTotalToDos={toDos.length}
          nroCompletedToDos={completedToDos.length}
        />
        <ToDoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
        <ToDoList 
          toDoList={searchedToDos} 
          onCompleted={onCompletedToDo}
          onDelete={onDeleteToDo}
        />
        <CreateToDoButton/>
      </GridContainer>
    </main>
  )
}

export {AppUI};
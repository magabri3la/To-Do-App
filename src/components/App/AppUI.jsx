import React from 'react'
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from "../ToDoList/ToDoList";
import { CreateToDoButton } from "../CreateToDoButton/CreateToDoButton";
import { GridContainer } from "../GridContainer/GridContainer";
import style from './App.module.css';

function AppUI () {
  return (
    <main className={style.ToDoApp}>
      <GridContainer>
          <ToDoCounter/>
          <ToDoSearch/>
          <ToDoList/>
        <CreateToDoButton/>
      </GridContainer>
    </main>
  );
};

export { AppUI };
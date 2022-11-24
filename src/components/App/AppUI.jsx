import React from 'react'
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from "../ToDoList/ToDoList";
import { CreateToDoButton } from "../CreateToDoButton/CreateToDoButton";
import { GridContainer } from "../GridContainer/GridContainer";
import { Modal } from '../Modal/Modal';
import style from './App.module.css';
import { ToDoContext } from '../Context/Context';
import { ToDoForm } from '../ToDoForm/ToDoForm';

function AppUI () {
  const { showModal } = React.useContext(ToDoContext);

  return (
    <main className={style.ToDoApp}>
      <GridContainer>
          <ToDoCounter/>
          <ToDoSearch/>
          <ToDoList/>
          <CreateToDoButton />
          {showModal && (
            <Modal id="modalCreateToDo">
              <ToDoForm/>
            </Modal>
          )}
      </GridContainer>
    </main>
  );
};

export { AppUI };
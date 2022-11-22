import React, {useState} from "react";
import {ToDoCounter} from "./components/ToDoCounter/ToDoCounter";
import {ToDoSearch} from "./components/ToDoSearch/ToDoSearch";
import {ToDoList} from "./components/ToDoList/ToDoList";
import {CreateToDoButton} from "./components/CreateToDoButton/CreateToDoButton";
import GridContainer from "./components/GridContainer/GridContainer";
import style from './App.module.css';

function App() {
  const [countToDos, setCountToDos] = useState(4);
  
  return (
    <main className={style.ToDoApp}>
      <GridContainer>
        <ToDoCounter nroToDos={countToDos}/>
        <ToDoSearch/>
        <ToDoList/>
        <CreateToDoButton/>
      </GridContainer>
    </main>
  );
}

export default App;

{/* <div className={style.containerImage}>
  <img 
    className={style.image} 
    src="/assets/image-glosario.png"
    alt="random"/>
</div> */}
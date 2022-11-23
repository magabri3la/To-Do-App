import React from "react";
import { AppUI } from "./AppUI";


const initialToDos = [
  {
    text : "Contar cebolla como demente para toda la semana",
    completed : false
  },
  {
    text : "Terminar curso de React Fundamentals Platzi",
    completed : true
  },
  {
    text : "Buscar canasta navideña en rimac",
    completed : false
  },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [toDos, setToDos] = React.useState(initialToDos);

  const completedToDos = toDos.filter((toDo) => !!toDo?.completed)

  let searchedToDos = [];

  if(!searchValue.length >= 1) {
    searchedToDos = toDos;
  }
  else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    })
  }

  const onCompletedToDo = (text) => {
    const indexToDoText = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[indexToDoText].completed = !newToDos[indexToDoText].completed;
    setToDos(newToDos);
  }

  const onDeleteToDo = (text) => {
    const indexToDoText = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(indexToDoText, 1);
    setToDos(newToDos);
  }

  return (
    <AppUI
      toDos={toDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      onCompletedToDo={onCompletedToDo}
      onDeleteToDo={onDeleteToDo}
    />
  );
}

export default App;

{/* <div className={style.containerImage}>
  <img 
    className={style.image} 
    src="/assets/image-glosario.png"
    alt="random"/>
</div> */}
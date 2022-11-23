import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider (props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V3', []);
  
  const [ searchValue, setSearchValue ] = React.useState('');
  const [ showModal, setShowModal ] = React.useState(false);
  
  const completedToDos = toDos.filter((toDo) => !!toDo?.completed);
  
  let searchedToDos = [];

  if(!searchValue.length >= 1) {
    searchedToDos = toDos;
  }
  else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText)
    })
  };

  const onCompletedToDo = (text) => {
    const indexToDoText = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[indexToDoText].completed = !newToDos[indexToDoText].completed;
    saveToDos(newToDos);
  };

  const onDeleteToDo = (text) => {
    const indexToDoText = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(indexToDoText, 1);
    saveToDos(newToDos);
  };

  return (
    <ToDoContext.Provider value={{
      error,
      loading,
      toDos,
      completedToDos,
      searchValue,
      searchedToDos,
      showModal,
      setShowModal,
      setSearchValue,
      onCompletedToDo,
      onDeleteToDo,
    }}>
      {props.children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider };
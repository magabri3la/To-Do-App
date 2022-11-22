import React from 'react'

function ToDoCounter({nroToDos}) {

  const style = {
    fontFamily: "TT Travels Next",
    fontSize: "48px",
    fontWeight: 700
  };

  return (
    <div style={style}>TodoCounter : {nroToDos}</div>
  )
}

export {ToDoCounter};
import React from 'react'

function ToDoCounter({nroTotalToDos, nroCompletedToDos}) {

  const style = {
    fontFamily: "TT Travels Next",
    fontSize: "48px",
    fontWeight: 700
  };

  return (
    <div style={style}>{nroCompletedToDos}/{nroTotalToDos}</div>
  )
}

export {ToDoCounter};
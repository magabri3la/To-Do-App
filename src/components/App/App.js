import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../Context/Context";

function App () {
  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export { App };

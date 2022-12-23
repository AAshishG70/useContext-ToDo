import React, { useState, useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [todo, setTodo] = useState("Hello There!");
  return (
    <>
      <TodoContext.Provider value={todo}>
        <TodoInput />
      </TodoContext.Provider>
      <h1>Heading 1</h1>
    </>
  );
};

export default App;

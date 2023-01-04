import { createContext, useContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  };

  const contextValue = {
    todos,
    addTodos,
    removeTodo,
  };

  return (
    <>
      <TodoContext.Provider value={contextValue}>
        {children}
      </TodoContext.Provider>
    </>
  );
};

export const useTodoContext = () => useContext(TodoContext);

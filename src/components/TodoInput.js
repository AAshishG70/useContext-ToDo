import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import "./TodoInput.css";

function TodoInput() {
  const [todoValue, setTodoValue] = useState("");
  const { addTodos } = useTodoContext();
  function changeHandler(e) {
    setTodoValue(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!todoValue) {
      return;
    }
    addTodos(todoValue);
    setTodoValue("");
  }
  return (
    <>
      <input
        onChange={changeHandler}
        type="text"
        value={todoValue}
        placeholder="Enter your todos"
      />
      <button onClick={submitHandler}>Submit</button>
    </>
  );
}

export default TodoInput;

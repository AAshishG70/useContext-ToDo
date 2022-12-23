// import React, { useContext } from "react";

// const TodoInput = () => {
//   const { todo } = useContext(TodoContext);
//   return (
//     <>
//       <h1> ToDO App</h1>
//       <input type="text" placeholder="Enter your Todo" />
//       <button>Submit</button>
//     </>
//   );
// };

// export default TodoInput;

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoInput() {
  const todo = useContext(TodoContext);
  console.log(typeof todo);
  return <div>{todo}</div>;
}

export default TodoInput;

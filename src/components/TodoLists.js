import { useTodoContext } from "../context/TodoContext";
import "./TodoLists.css";

export function TodoLists() {
  const { todos, removeTodo } = useTodoContext();
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        );
      })}
    </ul>
  );
}

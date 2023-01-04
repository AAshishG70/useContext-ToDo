import TodoInput from "./components/TodoInput";
import { TodoLists } from "./components/TodoLists";
import "./index.css";

const App = () => {
  return (
    <div>
      <h1>ToDo App</h1>
      <TodoInput />
      <TodoLists />
    </div>
  );
};

export default App;

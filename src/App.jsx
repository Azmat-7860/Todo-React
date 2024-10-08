import "./App.css";
import Heading from "./assets/Components/Heading";
import Input from "./assets/Components/Input";
import TodoItems from "./assets/Components/TodoItems";

function App() {
  return (
    <div className="todo-container">
      <Heading />
      <hr className="border border-white border-2 opacity-50" />
      <Input />
      <TodoItems />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Heading from "./assets/Components/Heading";
import Input from "./assets/Components/Input";
import TodoItems from "./assets/Components/TodoItems";
import { TodoContext, TodoProvider } from "./ContextAPI/Context";

function App() {
  let itemName = [
    {
      name: "mango",
      isComplete: false,
    },
    {
      name: "apple",
      isComplete: false,
    },
    {
      name: "banana",
      isComplete: false,
    },
  ];
  const [todos, setTodos] = useState(itemName);

  const handleAdd = (todo) => {
    let newTodo = [{ name: todo, isComplete: false }, ...todos];
    setTodos(newTodo);
  };

  const handleComplete = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isComplete: !todo.isComplete }; // Toggle the isComplete value
      }
      return todo;
    });
    // console.log(newTodos);
    setTodos(newTodos);
  };

  const handleDlt = (itemIndex) => {
    let newTodos = [...todos];
    newTodos.splice(itemIndex, 1);
    setTodos(newTodos);
  };
  return (
    <TodoProvider
      value={{
        items: todos,
        addItem: handleAdd,
        dltItem: handleDlt,
        completeItem: handleComplete,
      }}
    >
      <div className="todo-container">
        <Heading />
        {/* <div className="m-3">
        <p>Your Progress 🏃‍♂️🏃‍♂️</p>
        <progress className="progress" value="93" max="100" />
      </div> */}

        <Input />
        <TodoItems />
      </div>
    </TodoProvider>
  );
}

export default App;

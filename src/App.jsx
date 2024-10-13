import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./assets/Components/Heading";
import Input from "./assets/Components/Input";
import TodoItems from "./assets/Components/TodoItems";
import { TodoContext, TodoProvider } from "./ContextAPI/Context";

function App() {
  const [todos, setTodos] = useState([]);

  const handleProgress = () => {
    const todoLength = todos.length;
    const completedTodos = todos.filter((todo) => todo.isComplete).length;
    const progress = (completedTodos / todoLength) * 100;
    return progress;
  };

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
    setTodos(newTodos);
  };

  const handleDlt = (itemIndex) => {
    let newTodos = [...todos];
    newTodos.splice(itemIndex, 1);
    setTodos(newTodos);
  };

  // Load todos from localStorage when component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos); // Load todos from localStorage
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos && todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoProvider
      value={{
        items: todos,
        addItem: handleAdd,
        progress: handleProgress,
        dltItem: handleDlt,
        completeItem: handleComplete,
      }}
    >
      <div className="todo-container">
        <Heading />
        <Input />
        <TodoItems />
      </div>
    </TodoProvider>
  );
}

export default App;

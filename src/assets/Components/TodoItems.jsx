import React from "react";
import TodoItem from "./TodoItem";

function TodoItems() {
  let itemName = ["mango", "apple", "banana", "mango", "apple", "banana"];
  return (
    <div className=" mt-4">
      {itemName.map((item, index) => (
        <TodoItem key={index} itemName={item} />
      ))}
    </div>
  );
}

export default TodoItems;

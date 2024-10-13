import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../ContextAPI/Context";

function TodoItems() {
  const contextObj = useContext(TodoContext);
  let itemName = contextObj.items;
  // console.log(itemName);

  return (
    <div className=" mt-4">
      {itemName.map((item, index) => (
        <TodoItem
          key={index}
          itemName={item.name}
          isItem={item.isComplete}
          itemIndex={index}
        />
      ))}
    </div>
  );
}

export default TodoItems;

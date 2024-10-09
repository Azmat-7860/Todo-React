import React, { useContext, useRef } from "react";
import { TodoContext } from "../../ContextAPI/Context";

function Input() {
  const TodoRef = useRef();
  const ContextObj = useContext(TodoContext);
  const AddTodo = ContextObj.addItem;

  const handleAdd = () => {
    const TodoTitle = TodoRef.current.value.trim();
    if (TodoTitle) {
      AddTodo(TodoTitle);
      TodoRef.current.value = "";
    } else {
      alert("Todo input cannot be empty");
    }
  };
  return (
    <div className=" m-2 d-flex justify-content-around">
      <input type="text" placeholder="✍ Write todo here..." ref={TodoRef} />
      <button
        type="button"
        className="item-btn py-2 fs-5"
        title="Add item"
        onClick={handleAdd}
      >
        ➕
      </button>
    </div>
  );
}

export default Input;

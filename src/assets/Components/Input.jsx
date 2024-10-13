import React, { useContext, useRef } from "react";
import { TodoContext } from "../../ContextAPI/Context";
import { MdOutlinePostAdd } from "react-icons/md";

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
        className="item-btn  pb-2"
        title="Add item"
        onClick={handleAdd}
      >
        <MdOutlinePostAdd className=" p-0 fs-2" />
      </button>
    </div>
  );
}

export default Input;

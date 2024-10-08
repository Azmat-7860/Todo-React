import React, { useContext } from "react";
import { TodoContext } from "../../ContextAPI/Context";

function TodoItem({ itemName, itemIndex, isItem }) {
  // console.log("these  are item name", isItem);
  const contextObj = useContext(TodoContext);
  let dltBtn = contextObj.dltItem;
  let completeBtn = contextObj.completeItem;

  const handleDltBtn = () => {
    dltBtn(itemIndex);
  };
  const handleComplete = () => {
    completeBtn(itemIndex);
  };

  return (
    <div className=" item-box m-2 d-flex justify-content-between align-items-center">
      <div className={`ms-2 text-capitalize ${isItem && "red-line-through"}`}>
        {itemName}
      </div>

      <div className="me-2 w-100 d-flex  justify-content-end column-gap-2 ">
        <button className="item-btn " onClick={handleComplete}>
          ✔
        </button>
        <button className="item-btn fs-6" onClick={handleDltBtn}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

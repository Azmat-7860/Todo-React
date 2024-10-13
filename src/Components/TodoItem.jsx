import React, { useContext } from "react";
import { TodoContext } from "../../ContextAPI/Context";
import { MdOutlineDoneAll, MdOutlineRemoveDone } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";

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
    <div className=" item-box m-2 column-gap-2 d-flex justify-content-between align-items-center">
      <div
        className={`ms-2 todo-title text-capitalize ${
          isItem && "red-line-through "
        }`}
      >
        {itemName}
      </div>

      <div className="me-2 d-flex  justify-content-end column-gap-2 ">
        {isItem ? (
          <button
            className="item-btn"
            title="Task Completed "
            onClick={handleComplete}
          >
            <MdOutlineDoneAll />
          </button>
        ) : (
          <button
            className="item-btn"
            title="Not Completed "
            onClick={handleComplete}
          >
            <MdOutlineRemoveDone />{" "}
          </button>
        )}

        <button
          className="item-btn "
          title="Delete Task "
          onClick={handleDltBtn}
        >
          <TbHttpDelete className="fs-3" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

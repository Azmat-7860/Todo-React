import React from "react";
import { TbXboxX } from "react-icons/tb";
import { MdOutlineDoneOutline } from "react-icons/md";

function TodoItem({ itemName }) {
  // console.log("these  are item name", itemName);

  return (
    <div className=" item-box m-2 d-flex justify-content-between align-items-center">
      <div className=" ms-2 text-capitalize"> {itemName}</div>
      <div className="me-2 w-100 d-flex  justify-content-end column-gap-2 ">
        <button className="item-btn ">✔</button>
        <button className="item-btn fs-6">❌</button>
      </div>
    </div>
  );
}

export default TodoItem;

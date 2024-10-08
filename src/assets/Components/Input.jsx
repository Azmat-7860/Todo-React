import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function Input() {
  return (
    <div className=" m-2 d-flex justify-content-around">
      <input type="text" placeholder="✍ Enter todo here..." />
      <button type="button" className="item-btn py-2 fs-5">
        ➕
      </button>
    </div>
  );
}

export default Input;

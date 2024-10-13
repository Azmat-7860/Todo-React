import React, { useContext } from "react";
import { TodoContext } from "../../ContextAPI/Context";

function Heading() {
  let date = new Date();
  // console.log(date);
  const contextObj = useContext(TodoContext);
  const progress = Math.round(contextObj.progress());

  // console.log(todoNum);

  return (
    <div className="mx-3">
      <div className="heading-item d-flex justify-content-between align-items-center">
        <h1>My Todo List</h1>
        <span className="badge text-bg-danger ms-auto">V2.1</span>
      </div>
      <div className="date mb-1 ">{date.toDateString()}</div>
      <label> Today's Progress 🏃‍♂️🏃‍♂️ </label>
      <div
        className="progress mb-3 position-relative"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={progress} // Current progress value
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default Heading;

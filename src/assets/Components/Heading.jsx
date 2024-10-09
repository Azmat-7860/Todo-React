import React from "react";

function Heading() {
  let date = new Date();
  // console.log(date);

  return (
    <div className="mx-3">
      <div className="heading-item d-flex justify-content-between align-items-center">
        <h1>My Todo List</h1>
        <span className="badge text-bg-danger ms-auto">V2.0</span>
      </div>
      <div className="date">{date.toDateString()}</div>
    </div>
  );
}

export default Heading;

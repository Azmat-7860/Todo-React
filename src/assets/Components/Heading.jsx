import React from "react";

function Heading() {
  let date = new Date();
  // console.log(date);

  return (
    <div className=" mx-3 ">
      <div className="heading">
        <h1>My Todo List</h1>
      </div>
      <div className="date">{date.toDateString()}</div>
    </div>
  );
}

export default Heading;

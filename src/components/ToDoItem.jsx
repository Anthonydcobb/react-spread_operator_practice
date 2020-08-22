import React, { useState } from "react";

function ToDoItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const lineThrough = {
    textDecoration: "line-through",
    color: "red"
  };

  function handleClick() {
    setIsChecked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {props.newItem}
      </li>
    </div>
  );
}

export default ToDoItem;

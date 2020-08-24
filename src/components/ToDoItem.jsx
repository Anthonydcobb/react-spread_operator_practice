import React from "react";

function ToDoItem(props) {
  function handleClick() {}

  return (
    <div
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      <li>{props.newItem}</li>
    </div>
  );
}

export default ToDoItem;

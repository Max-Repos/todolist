import React from "react";

const ToDoLists = (props) => {

    

  return (
    <>
      <div className="todo_style">
        <h6 className="fa-times" onClick={() => {
            props.onSelect(props.id); //passing id to deleteItems function
        }}> ~</h6>
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoLists;

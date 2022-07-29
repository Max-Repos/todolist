import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./todolist";

const App = () => {
  const [inputList, setInputList] = useState(""); // creating variable for storing input value
  const [Items, setItems] = useState([]); // creating Array for input list

  const itemEvent = (e) => {
    setInputList(e.target.value); // assigning input value in inputList variable
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]; // inserting input value in Array
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((ele,i) => {
        return i !== id;        // returning Items array which index are not matching with id
      })
    })
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            value={inputList} // uploading value from here
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {Items.map((element, index) => {
              return (
                <ToDoLists
                  key={index}
                  text={element}
                  id={index}
                  onSelect={deleteItems}
                />
              ); //  printing elements of Items Array
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

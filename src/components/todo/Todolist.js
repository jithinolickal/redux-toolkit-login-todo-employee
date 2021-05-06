import React, { useState } from "react";
import "./Todolist.css";
import TodolistItem from "./TodolistItem";
import { useDispatch, useSelector } from "react-redux";
import { saveNewItem, todoSelector } from "../../redux-slice/todoSlice";

const Todolist = () => {
  console.log("hi");
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const todoArray = useSelector(todoSelector);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleClick = (item) => {
    const newItem = {
      name: item.name,
      id: item.id,
      striked: item.striked,
    };

    dispatch(saveNewItem(newItem));

    setInputText("");
  };

  return (
    <div className="main-container">
      <div className="container">
        <span className="title">ToDo List</span>
        {/* items */}
        <div className="output-div">
          {todoArray.map((item) => (
            <TodolistItem
              key={item.id}
              id={item.id}
              name={item.name}
              striked={item.striked}
            />
          ))}
        </div>

        {/* inputbox */}
        <div /* className="input-div" */>
          <form
            className="input-div"
            onSubmit={(e) => {e.preventDefault();}}
          >
            <input
              type="text"
              className="text-input"
              onChange={(e) => handleChange(e)}
              value={inputText}
            />
            <button
              className="btn-save"
              type="submit"
              onClick={() =>
                handleClick({ name: inputText, id: Date.now(), striked: false })
              }
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todolist;

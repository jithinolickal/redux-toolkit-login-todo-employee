import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Todolist.css";
import { updateStriked, removeItem } from "../../redux-slice/todoSlice";

const TodolistItem = (props) => {
  const { name, id, striked } = props;
  const dispatch = useDispatch();

  const handleChange = (id) => {
      dispatch(updateStriked(id));
  };

  return (
    <div className="todoItem-div">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={name}
        checked={striked}
        onChange={() => handleChange(id)}
      ></input>
      <div className={striked && 'strike-text'}>{name}</div>
      <div className="x-close-container">
          <div className="x-close" onClick={()=>dispatch(removeItem(id))}>X</div>
      </div>
    </div>
  );
};

export default TodolistItem;

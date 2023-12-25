import React from "react";
import "/home/sec/Desktop/todolist/to-do-list-fe/src/Components/HomeComponent/ListComponent.css";
const ListComponent = ({ list, index ,CheckFunction,DeleteFunction}) => {
  return (
    <div className="card" key={index}>
      <div className="text-container">
        <label htmlFor="#" id="checkbox">
          <input
            id="checkbox"
            type="checkbox"
            className="checkbox"
            checked={list.completed}
            onChange={() => {
              CheckFunction(list._id);
            }}
          ></input>
        </label>
        <span
          className="list"
          style={
            
            { textDecoration: list.completed ? "line-through" : "none" }
            
          }
        >
          {list.title}
        </span>
        <button
          onClick={() => {
            DeleteFunction(list);
          }}
          className="delete-btn"
        >
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/filled-trash.png"
            alt="filled-trash"
          />
        </button>
      </div>
    </div>
  );
};

export default ListComponent;

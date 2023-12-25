import axios from "axios";
import "/home/sec/Desktop/todolist/to-do-list-fe/src/Components/HomeComponent.css";
import ListComponent from "./ListComponent";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const HomeComponent = ({ list, setList }) => {
  const [searchItem, setSearchItem] = useState("");


  const CheckFunction = (id) => {
    axios
      .post(`http://localhost:3500/api/v1/${id}`, id)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DeleteFunction = (l) => {
    axios
      .post(`http://localhost:3500/api/v1/`, l)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchFunction = (e) => {

    const searchValue = e.target.value;
    setSearchItem(searchValue);

    if (searchValue !== "") {
      const filterList = list.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setList(filterList);
    }
    else{
      //replace with the initial order
      const initialList = JSON.parse(window.localStorage.getItem('item'));
      setList(initialList);
    }
  };
  
 

  return (
    <div>
      <h1>To-Do List</h1>
      <label htmlFor="searchBar">
        <img
          className="searchicon"
          width="26"
          height="26"
          src="https://img.icons8.com/metro/26/search.png"
          alt="search"
        />
      </label>
      <input
        className="searchBar"
        type="text"
        value={searchItem}
        onChange={(e) => {
          searchFunction(e);
        }}
      />
      <Link to="/list">
        <button className="add">
          <img
            className="addimage"
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/plus-2-math--v1.png"
            alt="plus-2-math--v1"
          />
        </button>
      </Link>

      {list.length === 0 && <h2>Add Task...</h2>}

      {list.length !== 0 &&
        list.map((item, index) => (
          <ListComponent
            key={index}
            list={item}
            CheckFunction={CheckFunction}
            DeleteFunction={DeleteFunction}
          />
        ))}
    </div>
  );
};

export default HomeComponent;

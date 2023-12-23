import React from 'react'
import { useState } from 'react';
import "/home/sec/Desktop/todolist/to-do-list-fe/src/Components/AddComponent/AddComponent.css";
import axios from 'axios';

const AddComponent = ({list,setList}) => {
  
  const [newList, setNewList] = useState({
    title:'',
    checked:false
  });
  
  const {title,checked} = newList;

  const titleHandler = (e) => {
    setNewList({
      ...newList,
      title: e.target.value,
    });
  };

  const submitFunction = (e) => {
    e.preventDefault();
    console.log(newList);
    axios
      .post(`http://localhost:3500/api/v1/list`, newList)
      .then((response) => {
        if (response) {
          console.log(response);
          window.location.href="/";
        }
        
      })
      .catch((error) => console.log(error.response.data.message));
    // // send data to back-end

    // window.location.href='/';
  }

  return (
    <div className='container'>
      <form action="#" onSubmit={(e) => {submitFunction(e)}} className='formcontainer'>
        <label htmlFor="list"
        id='list'
        className='labelcontainer'
        >
          Enter your List:
        </label>
        <input 
        type="text"
        id='list' 
        placeholder='enter your list...'
        value={title}
        onChange={titleHandler}
        className='inputcontainer'/>
        <button type='submit' id='submitcontainer'>Add</button>
      </form>
    </div>
  )
}

export default AddComponent
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import HomeComponent from './Components/HomeComponent/HomeComponent'
import AddComponent from './Components/AddComponent/AddComponent'
import React, {useEffect } from "react";
import axios from 'axios';

function App() {
    const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3500/api/v1/`)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <Router>
      <nav>
        <Link to='/'></Link>
      </nav>
      <Routes>
        <Route exact path='/' element={<HomeComponent list={list} setList={setList}/>}></Route>
        <Route exact path='/list' element={<AddComponent list = {list} setList={setList}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App

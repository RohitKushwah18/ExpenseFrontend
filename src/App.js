import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Auth/Login';
import Signin from './Auth/Signin';
import Home from './Auth/Home';


const App = ()=> {

  return (

      <div className="mainpage">
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Signin/>}/>
      <Route path="/home" element={<Home/>}/>
      </Routes>
      {/* <Navbar onSectionChange={handleSectionChange} />
      <main>{content}</main> */}
      </div>

  );
}

export default App

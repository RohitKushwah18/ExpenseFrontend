import React from 'react'
import { useState,useEffect } from 'react'
import {  message } from "antd";
import { NavLink,useNavigate } from 'react-router-dom';


import axios from 'axios'


const Signinform = () => {

  const navigate = useNavigate();


  
    const [state,setState] = useState({
        email: "",
        name: "",
        password: ""
      })
      
      // const [message, setMessage] = useState('');

      const { name,password,email } = state;
    
      const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setState({
          ...state,
          [name]: value,
        });
      };
      const onsignin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/api/v3/signup', {
              name,
              email,
              password
          });

          if (response.data.success === true) {
              message.success(response.data.message);
              navigate("/login");
          } else {
              message.info(response.data.message);
          }
      } catch (error) {
        if (error.response) {
          message.error(error.response.data.message);
        }
      }
  };

        
  return (
    <div className='cover'>
    <form onSubmit={onsignin} className='cover'>
    <h1>Signin</h1>
        <input type="email" value={email} name={'email'}  placeholder="email" onChange={handleInputChange} required = {true}/>
        <input type="text" value={name} name={'name'}  placeholder="User name" onChange={handleInputChange} required = {true}/>
        <input type= "password" placeholder="password" name={'password'} value={password}onChange={handleInputChange} required = {true}/>
        <button className ="login-btn" type="submit">signin</button>

        <p>Already User?<NavLink to="/login">login</NavLink> </p>
    </form> 
    </div>
  
  )
}

export default Signinform
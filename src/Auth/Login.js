import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { message } from "antd";

// import {useGlobalContext} from '../context/context';

const Loginform = () => {
  const navigate = useNavigate();
  const [state,setState] = useState({
    email: "",
    password: ""
  })
  // const {getUser} = useGlobalContext()
  const { email,password } = state;

  const handleInputChange = (e) => { 
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const { email, password} = state;

    try {
      const response = await axios.post("http://localhost:3000/api/v3/login", {
        email,
        password
      });
      if (response.data.success  === true) {
        message.success(response.data.message);
        localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.user, password: "" })
        );
        navigate("/home");
        }
      else{
        message.info(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message);
      }
    }
  };

  //prevent for login user
  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     navigate("/home");
  //   }
  // }, [navigate]);
  

  return (
    <div className='cover'>
    <form onSubmit={onLogin} className='cover'>
    <h1>Login</h1>
        <input type="email" value={email} name={'email'}  placeholder="email" onChange={handleInputChange} required = {true}/>
        <input type= "password" placeholder="password" name={'password'} value={password}onChange={handleInputChange} required = {true}/>
        <button className ="login-btn" type="submit">login</button>

        <p>New User?<NavLink to="/">signin</NavLink> </p>
    </form> 
  
    </div>
  )
}

export default Loginform
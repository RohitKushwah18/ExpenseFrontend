import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { message } from "antd";
const Navbar = ({ onSectionChange }) => {
  const navigate = useNavigate()

  const logout = () => {
    try{
      localStorage.removeItem("user");
      message.success("logout Successfully");
      navigate("/login");

    }catch(err){
      console.log(err);
    }

  }
  return (
    <div className="navbar">
      <ul className="nav-list">
      <h1 className="nav-item" onClick={() => onSectionChange('Dashboard')}>
          Dashboard
        </h1>
        <h1 className="nav-item" onClick={() => onSectionChange('Income')}>
          Income
        </h1>
        <h1 className="nav-item" onClick={() => onSectionChange('Expense')}>
          Expense
        </h1>
        <button className="logout-button" onClick={logout}>Logout</button>
      </ul>
    </div>
  );
};

export default Navbar;
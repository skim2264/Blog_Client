import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar-div">
      <nav>
        <NavLink to="/">Home</NavLink>
        {(true)
          ?<div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
          :<button id="logoutButton">Logout</button>
        }
      </nav>
    </div>
  )
};

export default Navbar;
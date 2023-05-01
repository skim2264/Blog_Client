import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const {loggedIn, setLoggedIn} = props;

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setLoggedIn(false);
    window.location.reload(false);
  }

  return (
    <div className="navbar-div">
      <nav>
        <NavLink to="/">Home</NavLink>
        {(!loggedIn)
          ?<div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
          :<button id="logoutButton" onClick={logout}>Logout</button>
        }
      </nav>
    </div>
  )
};

export default Navbar;
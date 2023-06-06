import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn} = props;

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('user');
    setLoggedIn(false);
    navigate('/');
    window.location.reload(false);
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo nav-link">My Blog</NavLink>
      {(!loggedIn)
        ?<div className="navbar-right">
          <NavLink to="/login" className="nav-link">Login</NavLink>
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </div>
        :<button id="logoutButton" onClick={logout} className="nav-link">Logout</button>
      }
    </nav>
  )
};

export default Navbar;
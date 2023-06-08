import './App.css';
import React, {useState} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  const [loggedIn, setLoggedIn] = useState('accessToken' in sessionStorage);
  return (
    <div className="app-div">
      <HashRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
          <Routes>
            <Route path="/" element={<Home loggedIn={loggedIn}/>}/>
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/:postId" element={<Post></Post>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

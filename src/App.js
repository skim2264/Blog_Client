import './App.css';
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>}></Route>
          <Route path="/:postId" element={<Post></Post>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  }

  const signupSubmit = async(e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 
        Accept: "application/json",
        'Content-Type': 'application/json' },
      body: JSON.stringify({username, password})
    }
    const response = await fetch("https://blog-api-production-9c1d.up.railway.app/api/users/signup", requestOptions)
      .then(response => response.json())
      .catch((err) => {
        setErrors(err);
      })

    if ('username' in response && 'password' in response) {
      alert("Successfully signed up");
      navigate('/login');
    } else {
      const errArray = response.errors.map(error => {
        return error.msg
      })
      setErrors(errArray);
    }
  }
  return (
    <div className="signup-div">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={signupSubmit}>
        <label htmlFor="username"></label>
        <input name="username" placeholder="Username" autoComplete="username" onChange={handleUsernameChange} value={username}></input>
        <label htmlFor="password"></label>
        <input name="password" type="password" placeholder="Password" autoComplete="new-password" onChange={handlePasswordChange} value={password}></input>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      {errors ? (errors.map((error, index) => {
          return <p key={index}>{error}</p>
        })): null
      }
    </div>
  )
};

export default Signup;
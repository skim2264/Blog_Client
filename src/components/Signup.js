import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const navigate = useNavigate();

  const {setLoggedIn} = props;

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
      setLoggedIn(true);
      navigate('/');
    } else {
      const errArray = response.errors.map(error => {
        return error.msg
      })
      setErrors(errArray);
    }
  }
  return (
    <div className="signup-div">
      <form className="login-form" onSubmit={signupSubmit}>
        <label htmlFor="username">Username: </label>
        <input name="username" placeholder="username" onChange={handleUsernameChange} value={username}></input>
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" placeholder="password" onChange={handlePasswordChange} value={password}></input>
        <button type="submit" >Sign Up</button>
      </form>
      {errors ? errors.map((error, index) => {
        return <p key={index}>{error}</p>
      }): null}
    </div>
  )
};

export default Signup;
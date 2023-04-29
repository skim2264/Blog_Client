import React from "react";
import Post from "./Post";

const Home = () => {

  const getAllPosts = async() => {
    const requestOptions = {
      method: 'GET',
      headers: { 
        Accept: "application/json",
        'Content-Type': 'application/json' },
    }
    const response = await fetch("https://blog-api-production-9c1d.up.railway.app/api/posts", requestOptions)
      .then(data => data.json())
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="home-div">
    </div>
  )
};

export default Home;
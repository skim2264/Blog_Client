import React, {useState, useEffect} from "react";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  //fetch all products from API on mount
  useEffect(() => {
    getAllPosts();
  },[]);

  const getAllPosts = async() => {
    const requestOptions = {
      method: 'GET',
      headers: { 
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
    }
    const response = await fetch("https://blog-api-production-9c1d.up.railway.app/api/posts", requestOptions)
      .then(data => data.json())
      .catch((err) => {
        console.error(err);
      });
    console.log(response);
    setPosts(response);
  }

  return (
    <div className="home-div">
      {posts 
        ? posts.map(post => {
          return <Post post={post}></Post>
        })
        : null
      }
    </div>
  )
};

export default Home;
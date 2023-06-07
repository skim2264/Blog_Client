import React, {useState, useEffect} from "react";
import Post from "./Post";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  const loggedIn = props;
  const [posts, setPosts] = useState([]);

  //fetch all products from API on mount
  useEffect(() => {
    if (loggedIn) {
      getAllPosts();
    }
  },[]);

  const getAllPosts = async() => {
    const requestOptions = {
      method: 'GET',
      headers: { 
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`}
    }
    const req = await fetch("https://blog-api-production-9c1d.up.railway.app/api/posts", requestOptions)
      .then(data => data.json())
      .then(response => response.filter(post => !post.isPrivate))
      .catch((err) => {
        console.error(err);
      });
    
    setPosts(req);
  }

  return (
    <div className="home-div">
      {posts 
        ? posts.map(post => {
          return <Post post={post} key={post._id}></Post>
        })
        : <p>Please <NavLink to="/login" className="home-link">login</NavLink> to view posts</p>
      }
    </div>
  )
};

export default Home;
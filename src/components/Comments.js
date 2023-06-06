import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import Comment from "./Comment";

const Comments = () => {
  const params = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = async() => {
    const requestOptions = {
      method: 'GET',
      headers: { 
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`}
    }
    const response = await fetch(`https://blog-api-production-9c1d.up.railway.app/api/posts/${params.postId}/comments/`, requestOptions)
      .then(data => data.json())
      .catch((err) => {
        console.error(err);
      });
    setComments(response);
  }

  return (
    <div className="comments-div">
      <h2 className="comment-header">Comments:</h2>
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment._id}></Comment>
      })}
    </div>
  )
};

export default Comments;
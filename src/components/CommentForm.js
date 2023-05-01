import React, {useState} from "react";
import {useParams} from "react-router-dom";

const CommentForm = () => {
  const [commentText, setCommentText] = useState("");
  const [errors, setErrors] = useState([]);
  const params = useParams();

  const handleChange = (e) => {
    const value = e.target.value;
    setCommentText(value);
  }
  const submitForm = async(e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`},
      body: JSON.stringify({text: commentText})
    }
 
    const response = await fetch(`https://blog-api-production-9c1d.up.railway.app/api/posts/${params.postId}/comments/create`, requestOptions)
      .then(response => response.json())
      .catch((err) => {
        setErrors(err);
    })

    console.log(response);

    if ('text' in response) {
      alert("Comment Added");
      window.location.reload(false);
    } else {
      const errArray = response.errors.map(error => {
        return error.msg
      })
      setErrors(errArray);
    }
  }

  return (
    <form className="comment-form" onSubmit={submitForm}>
      <label htmlFor="comment-text"></label>
      <input name="comment-text" id="comment-text" placeholder="New Comment" onChange={handleChange}></input>
      <button type="submit">Add Comment</button>
      {errors ? errors.map((error, index) => {
        return <p key={index}>{error}</p>
      }): null}
    </form>
  )
};

export default CommentForm;
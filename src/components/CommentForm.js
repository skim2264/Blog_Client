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
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`},
      body: JSON.stringify({"text": commentText})
    }
 
    const req = await fetch(`https://blog-api-production-9c1d.up.railway.app/api/posts/${params.postId}/comments/create`, requestOptions)
      .then(response => response.json())
      .catch((err) => {
        setErrors(err);
    })

    console.log(req);

    if ("text" in req) {
      alert("Comment Added");
      window.location.reload(false);
    } else {
      const errArray = req.errors.map(error => {
        return error.msg
      })
      setErrors(errArray);
    }
  }

  return (
    <form className="comment-form" onSubmit={submitForm}>
      <label htmlFor="comment-text"></label>
      <textarea name="comment-text" id="comment-text" placeholder="New Comment" onChange={handleChange}></textarea>
      <button type="submit" className="submit-button comment-submit">Add Comment</button>
      {(errors.length > 0) ? errors.map((error, index) => {
        return <p key={index}>{error}</p>
      }): null}
    </form>
  )
};

export default CommentForm;
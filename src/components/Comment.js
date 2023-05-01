import React from "react";

const Comment = (props) => {
  const {comment} = props;

  return (
    <div className="comment-div">
      <p>{comment.text}</p>
      <p>{comment.author.username}</p>
      <p>{comment.timestamp}</p>
    </div>
  )
};

export default Comment;
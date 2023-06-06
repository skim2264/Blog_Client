import React from "react";

const Comment = (props) => {
  const {comment} = props;

  const created_date = new Date(comment.createdAt);
  const created_date_formatted = created_date.toLocaleDateString();

  const updated_date = new Date(comment.updatedAt);
  const updated_date_formatted = updated_date.toLocaleDateString();

  return (
    <div className="comment-div">
      <p className="comment-text">{comment.text}</p>
      <div className="comment-author-timestamp">
        <p className="comment-author">{comment.author.username}</p>
        <div className="comment-timestamp-div">
          <p className="comment-timestamp"> Created: {created_date_formatted}</p>
          <p className="comment-timestamp"> Updated: {updated_date_formatted}</p>
        </div>
      </div>
      
    </div>
  )
};

export default Comment;
import React, {useState} from "react";
import {useLocation} from 'react-router-dom';
import { NavLink } from "react-router-dom";

import Comments from "./Comments";
import CommentForm from "./CommentForm";

const Post = (props) => {
  let location = useLocation();
  const {post} = location.state || props;
  const [openComments, setOpenComments] = useState(false);

  const created_date = new Date(post.createdAt);
  const created_date_formatted = created_date.toLocaleDateString();

  const updated_date = new Date(post.updatedAt);
  const updated_date_formatted = updated_date.toLocaleDateString();

  const toggleComments = () => {
    if (location.state) {
      setOpenComments(!openComments);
    }
  }

  const addClass = (e) => {
    if (location.state) {
      e.target.classList.add("commentToggle");
    }
  }

  const removeClass = (e) => {
    if (location.state) {
      e.target.classList.remove("commentToggle");
    }
  }

  return (
    <div className="post-div">
      {location.state
        ? <p className = "post-title">{post.title}</p>
        : <NavLink to={{pathname:'/' + post._id}} state={{post}} key={post._id}><p className="post-link">{post.title}</p></NavLink>
      }

      <div className="post-author-timestamp">
        <p className = "post-author">by {post.author.username}</p>
        <div className="post-timestamp-div">
          <p className = "post-timestamp">Created: {created_date_formatted}</p>
          <p className = "post-timestamp">Last Updated: {updated_date_formatted}</p>
        </div>
      </div>
      
      <div className="post-image-text">
        <img src={post.image} alt="" className="post-image"></img>
        <p className = "post-text">{post.post_text}</p>
      </div>
      
      <hr></hr>
      {openComments
        ? <Comments></Comments>
        : <p onClick={toggleComments} onMouseOver={addClass} onMouseOut={removeClass} className="post-comments">{post.comments.length} Comments</p>
      }
      {location.state
        ? <CommentForm></CommentForm>
        : null
      }
    </div>
  )
};

export default Post;
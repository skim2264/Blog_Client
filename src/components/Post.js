import React, {useState} from "react";
import {useLocation} from 'react-router-dom';
import { NavLink } from "react-router-dom";

import Comments from "./Comments";
import CommentForm from "./CommentForm";

const Post = (props) => {
  let location = useLocation();
  const {post} = location.state || props;
  const [openComments, setOpenComments] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const toggleComments = () => {
    setOpenComments(!openComments);
  }

  const toggleCommentForm = () => {
    setOpenForm(!openForm);
  }

  return (
    <div className="post-div">
      {location.state
        ? <p>{post.title}</p>
        : <NavLink to={{pathname:'/' + post._id}} state={{post}} key={post._id}><p>{post.title}</p></NavLink>
      }
      <p>{post.post_text}</p>
      <p>{post.timestamp}</p>
      <p>{post.author.username}</p>
      {openComments
        ? <Comments></Comments>
        : <p onClick={toggleComments}>{post.comments.length} Comments</p>
      }
      {openForm
        ? <CommentForm></CommentForm>
        : null
      }
      {location.state && !openForm
        ? <button type="button" onClick={toggleCommentForm}>Add a comment</button>
        : null
      }
    </div>
  )
};

export default Post;
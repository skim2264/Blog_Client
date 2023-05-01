import React, {useState} from "react";
import {useLocation} from 'react-router-dom';
import { NavLink } from "react-router-dom";

import Comments from "./Comments";

const Post = (props) => {
  let location = useLocation();
  const {post} = location.state || props;
  const [openComments, setOpenComments] = useState(false);

  const toggleComments = () => {
    setOpenComments(!openComments);
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
      : <p onClick={toggleComments}>{post.comments.length} Comments</p>}
      {location.state
        ? <button type="button">Add a comment</button>
        : null
      }
    </div>
  )
};

export default Post;
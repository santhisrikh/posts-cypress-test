import React from "react";
import "./PostForm.css";

const PostForm = (props) => (
  <form className="form-input">
    <input
      type="input"
      name="post-name"
      autoFocus
      className="p-2 rounded border post-input"
      placeholder="Add post title"
    />
    <br/>
    <textarea type="text" placeholder="Add post body" />
    <br/>
    <button >Post</button>
  </form>
);

export default PostForm;

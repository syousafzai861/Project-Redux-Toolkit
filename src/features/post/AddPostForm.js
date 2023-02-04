import { useState } from "react";
import Form from "react-bootstrap/Form";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { Button } from "react-bootstrap";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [userid, setUserid] = useState();
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  console.log(users);


  const onSaveCliked = () => {
    if (title && content) {
      dispatch(
        postAdded(title,content,userid),
        console.log( postAdded(title,content,userid))
      );
      //setting the input fields back to empty after posting and entity
      setTitle("");
      setContent("");
    }
  };

  const cansave = Boolean(title) && Boolean(content) && Boolean(userid);

  const userOptions = users.map((user)=>(
    <option key={user.id} value={user.id}>
          {user.name}
    </option>
  ))
  return (
    <section>
      <Form>
        <h2>ADD A POST</h2>
        <Form.Group >
          <Form.Label>POST TITLE:</Form.Label>
          <Form.Control
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            placeholder="Enter Title"
            name="postTitle"
            className="ml-10"
          />
        </Form.Group>
        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" value={userid} onChange={(e)=>setUserid(e.target.value)}>
         <option value=""></option>
         {userOptions}
        </select>
        <Form.Group >
          <Form.Label>CONTENT:</Form.Label>
          <Form.Control
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            type="text"
            placeholder="Enter Content"
            name="postContent"
          />
        </Form.Group>
        <Button style={{width:"100%"}} onClick={onSaveCliked} type="button" variant="primary" disabled={!cansave}>
          Save Post
        </Button>
      </Form>
    </section>
  );
};

export default AddPostForm;

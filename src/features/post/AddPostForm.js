import { useState } from "react";
import Form from "react-bootstrap/Form";
import React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import { Button } from "react-bootstrap";

const AddPostForm = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const dispatch = useDispatch();


  const onSaveCliked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      //setting the input fields back to empty after posting and entity
      setTitle("");
      setContent("");
    }
  };
  return (
    <section>
      <Form>
        <h2>ADD A POST</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>POST TITLE</Form.Label>
          <Form.Control
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            placeholder="Enter Title"
            name="postTitle"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content</Form.Label>
          <Form.Control
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            type="text"
            placeholder="Enter Content"
            name="postContent"
          />
        </Form.Group>
        <Button onClick={onSaveCliked()} type="button" variant="primary">
          Save Post
        </Button>
      </Form>
    </section>
  );
};

export default AddPostForm;

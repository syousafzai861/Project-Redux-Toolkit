import React from "react";
import Postlist from './features/post/Postlist';
import AddPostForm from './features/post/AddPostForm';

function App() {
  return (
    <div className="App">
    <h1>HELLO REDUX TOOLKIT</h1>
    <AddPostForm/>
    <Postlist/>
    </div>
  );
}

export default App;

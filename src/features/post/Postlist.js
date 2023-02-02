import { useSelector } from "react-redux";
import {selectAllPost} from "./postSlice";
import React from 'react'

const Postlist = () => {
    const posts = useSelector(selectAllPost)
    console.log(posts)

    const renderpost = posts.map((post)=>(
        <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        </article>
    ))
  return (
    <div>
      <section>
        <h2>POST</h2>
        {renderpost}
      </section>
    </div>
  )
}

export default Postlist

import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import React from "react";
// import ReactionButtons from "./ReactionButtons";
import ReactionButtons from "./ReactionButtons";
const Postlist = () => {
  const posts = useSelector(selectAllPost);
  const orderedpost =  posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
  // console.log(posts);

  const renderpost = orderedpost.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <div>
      <section>
        <h2>POST</h2>
        {renderpost}
      </section>
    </div>
  );
};

export default Postlist;

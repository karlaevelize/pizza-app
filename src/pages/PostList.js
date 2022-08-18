import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/pizzas/thunks";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((reduxState) => reduxState.pizzas.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((p) => (
        <h3>{p.title}</h3>
      ))}
    </div>
  );
};

export default PostList;

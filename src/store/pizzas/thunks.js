import axios from "axios";
import { setPosts, setOnePost } from "./slice";

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/posts"
    );
    console.log(response.data.rows);
    dispatch(setPosts(response.data.rows));
  } catch (e) {
    console.log(e.message);
  }
};

// Skeleton of a thunk
export const fetchPostById = (id) => async (dispatch, getState) => {
  try {
  } catch (e) {
    console.log(e.message);
  }
};

// the middleware runs this function
// fetchPosts(dispatch, getState)

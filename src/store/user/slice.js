import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  token: null,
  profile: null,
  id: 42,
  favorites: [1, 2]
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload
      // console.log("id", id)
      //check if it's a favorite
      const newFavoritesArray = state.favorites.includes(id)
      //if favorite, remove from array
        ? state.favorites.filter(pizzaId => pizzaId !== id)
      //else we want to add it
        : [ ...state.favorites, id]
      // console.log("new array", newFavoritesArray)
      //update the state
      state.favorites = newFavoritesArray
    },
    userLogin: (state, action) => {
      console.log("action", action)
      // const { token, profile } = action.payload
      state.token = action.payload.token
      state.profile = action.payload.profile

    }
  },
});

export const { toggleFavorite, userLogin } = userSlice.actions;

export default userSlice.reducer;
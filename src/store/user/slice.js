import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
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

    }
  },
});

export const { toggleFavorite } = userSlice.actions;

export default userSlice.reducer;
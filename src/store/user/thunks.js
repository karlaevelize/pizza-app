import axios from "axios"
import { userLogin } from "./slice"

const API_URL = "https://codaisseur-coders-network.herokuapp.com"

export const login = (email, password) => async (dispatch, getState) => {
  const response = await axios.post(`${API_URL}/login`, {email, password})
  // console.log("response", response)
  const token = response.data.jwt
  localStorage.setItem("token", token)

  const profileResponse = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  // console.log("profile", profileResponse)
  const profile = profileResponse.data

  dispatch(userLogin({ token, profile }))
}

//1. Put the token in local storage
//2. Write a function to check if token is in local storage
//3. If so, make a request to get the profile
//4. Function should run whenever we refresh the page

export const persistLogin = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token")

  if (!token) return

  const profileResponse = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const profile = profileResponse.data

  dispatch(userLogin({ token, profile }))
}

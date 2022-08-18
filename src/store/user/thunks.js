import axios from "axios"
import { userLogin } from "./slice"

const API_URL = "https://codaisseur-coders-network.herokuapp.com"

export const login = (email, password) => async (dispatch, getState) => {
  const response = await axios.post(`${API_URL}/login`, {email, password})
  // console.log("response", response)

  const token = response.data.jwt
  
  const profileResponse = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  // console.log("profile", profileResponse)
  const profile = profileResponse.data
  dispatch(userLogin({ token, profile }))
}

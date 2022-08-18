import "./App.css";
import { useEffect } from "react"
import { useDispatch } from "react-redux"  
import { Routes, Route } from "react-router-dom"
import PizzaList from "./pages/PizzaList";
import PostList from "./pages/PostList";
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import { persistLogin } from "./store/user/thunks"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(persistLogin())
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<PostList/>}/>
        <Route path="/pizzas" element={<PizzaList/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

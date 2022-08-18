import "./App.css";
import { Routes, Route } from "react-router-dom"
import PizzaList from "./pages/PizzaList";
import PostList from "./pages/PostList";
import Login from "./pages/Login"
import Navbar from "./components/Navbar";

function App() {
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

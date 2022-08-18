import "./App.css";
import { Routes, Route } from "react-router-dom"
import PizzaList from "./pages/PizzaList";
import PostList from "./pages/PostList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostList/>}/>
        <Route path="/pizza" element={<PizzaList/>}/>
      </Routes>
    </div>
  );
}

export default App;

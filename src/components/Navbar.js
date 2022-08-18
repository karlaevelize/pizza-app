import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <NavLink to="/pizzas">Pizzas</NavLink>{" "}
      {/* user.token ? "Welcome" : Navlink to login */}
      <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default Navbar
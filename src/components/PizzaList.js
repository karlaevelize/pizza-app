import { useDispatch, useSelector } from "react-redux";
import AddPizzaForm from "./AddPizzaForm";
import { selectPizzas } from "../store/pizzas/selectors";
import { selectUser } from "../store/user/selectors";
import { toggleFavorite } from "../store/user/slice";

const PizzaList = () => {

  //1. Display a list of pizzas
  //2. Add a new pizza
  //3. User slice
  //4. Toggle favorite
  //5. Delete a pizza

  const dispatch = useDispatch()

  const pizzas = useSelector(selectPizzas)
  // console.log("pizzas", pizzas)

  const user = useSelector(selectUser)
  console.log("user", user)


  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p><b>Total:</b> {pizzas.length} pizzas</p>
      {/* Add pizza form */}
      <AddPizzaForm/>
      {/* Display list of pizzaz */}
      {pizzas && pizzas.map(pizza => {
        return <div>
          <h3>{pizza.name}</h3> <button onClick={() => dispatch(toggleFavorite(pizza.id))}>{user.favorites.includes(pizza.id) ? "♥" : "♡"}</button>
          <p><b>Bought:</b> {pizza.bought} times</p>
          <img style={{ width: 200}} src={pizza.image}/>
          <p>{pizza.description}</p>
        </div>
      })}
    </div>
  );
}

export default PizzaList
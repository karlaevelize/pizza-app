import { useSelector } from "react-redux";

export const selectPizzas = () => (reduxState) => reduxState.pizzas.allPizzas;

// useSelector(selectPizzas);

export const selectPizzaById = (id) => (reduxState) => {
  if (id > 3) {
    return { name: "No pizza exists" };
  } else {
    return reduxState.pizzas.allPizzas.find((p) => p.id === id);
  }
};

// useSelector(selectPizzaById(10));
// selectPizzaById(2, {}, "matias", )

// =>
// (reduxState) =>
//   reduxState.allPizzas.find((p) => p.id === 2);

// useSelector(selectPizzaById(3));

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/slice";

const AddPizzaForm = () => {
  const [name, setName] = useState("Hawaii");
  const [description, setDescription] = useState("Chicken, pineapple and sauce. Very controversial");
  const [image, setImage] = useState("https://www.tantefanny.nl/wp-content/uploads/sites/2/2018/02/Pizza_Hawaii-700x800.jpg");

  const dispatch = useDispatch()

  const submit = (event) => {
    event.preventDefault();
    dispatch(addPizza({ name, description, image, bought: 0 }))
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Image:{" "}
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
};

export default AddPizzaForm;
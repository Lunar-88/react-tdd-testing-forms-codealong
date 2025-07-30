
import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("");
  const [contact, setContact] = useState("");

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted!");
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        <div>
          <label htmlFor="size">Select Size</label>
          <select id="size" value={size} onChange={handleSizeChange}>
            <option value="">-- Choose --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact">Contact Info</label>
          <input
            id="contact"
            type="text"
            value={contact}
            onChange={handleContactChange}
          />
        </div>

        <button type="submit">Submit Order</button>
      </form>

      <p data-testid="selection-text">
        <strong>Your Selection:</strong>{" "}
        {size ? size : "No size selected"}{" "}
        {pepperoniIsChecked ? "with Pepperoni" : ""}
      </p>
    </div>
  );
}

export default App;

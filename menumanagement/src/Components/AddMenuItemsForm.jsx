import React, { useState } from "react";
import "../Styles/PopupForm.css";

const AddMenuItemsForm = ({ menu, onClose, onAdd }) => {
  const [menuItem, setMenuItem] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { menu, menuItem, description, price };
    onAdd(newItem); // Send data to Food.jsx
    onClose(); // Close the popup
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Add {menu} Item</h2>
        <form onSubmit={handleSubmit}>
          <label>Menu Item:</label>
          <input
            type="text"
            value={menuItem}
            onChange={(e) => setMenuItem(e.target.value)}
            required
          />

          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <div className="popup-buttons">
            <button type="submit" className="submit-button">Add</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItemsForm;

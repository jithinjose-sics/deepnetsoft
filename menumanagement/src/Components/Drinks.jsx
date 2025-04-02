import React, { useEffect, useState } from "react";
import "../Styles/Menu.css";
import AddMenuItemsForm from "./AddMenuItemsForm";
import axios from "axios";

const Drinks = ({ menu }) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [drinkList, setDrinkList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const handleAddDrink = (newDrink) => {
    console.log(newDrink, menu);

    axios
      .post(`${API_BASE_URL}/addMenuItem`, newDrink, menu)
      .then((res) => {
        console.log(res);
        getDrinkList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDrinkList = () => {
    axios
      .get(`${API_BASE_URL}/menu/${menu}`)
      .then((res) => {
        setDrinkList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
      });
  };
  useEffect(() => {
    getDrinkList();
  }, [menu]);

  return (
    <>
      <div className="menu-items">
        <h2 className="menu-title">{menu}</h2>
        <button className="add-button" onClick={() => setOpenForm(true)}>
          Add
        </button>

        {/* Display added drinks */}
        {drinkList.map((drink, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-text">
              <h3>
                {drink.menuItem} <span className="price">${drink.price}</span>
              </h3>
              <p>{drink.description}</p>
            </div>
          </div>
        ))}
         {drinkList.length == 0 ? (
          <p className="text-info">please Add your Favourite Drink</p>
        ) : (
          ""
        )}
       
      </div>

      {/* Pass menu prop to the form */}
      {openForm && (
        <AddMenuItemsForm
          menu={menu}
          onClose={() => setOpenForm(false)}
          onAdd={handleAddDrink}
        />
      )}
    </>
  );
};

export default Drinks;

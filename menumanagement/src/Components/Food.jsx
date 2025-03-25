import React, { useEffect, useState } from "react";
import "../Styles/Menu.css";
import AddMenuItemsForm from "../Components/AddMenuItemsForm.jsx";
import axios from "axios";

const Food = ({ menu }) => {
  const [foodList, setFoodList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const handleAddFood = (newFood) => {
    axios
      .post("http://localhost:5000/addMenuItem", newFood, menu)
      .then((res) => {
        console.log(res);
        getFoodList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFoodList = () => {
    axios
      .get(`http://localhost:5000/menu/${menu}`)
      .then((res) => {
        setFoodList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
      });
  };

  useEffect(() => {
    getFoodList();
  }, [menu]);

  return (
    <>
      <div className="menu-items">
        <h2 className="menu-title">{menu}</h2>
        <button className="add-button" onClick={() => setOpenForm(true)}>
          Add
        </button>

        {/* Display dynamically added menu items */}
        {foodList &&
          foodList.map((food, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-text">
                <h3>
                  {food.menuItem} <span className="price">${food.price}</span>
                </h3>
                <p>{food.description}</p>
              </div>
            </div>
          ))}
        {foodList.length == 0 ? (
          <p className="text-info">please Add your Favourite Food</p>
        ) : (
          ""
        )}
      </div>

      {/* Pass menu and onAdd function to save items */}
      {openForm && (
        <AddMenuItemsForm
          menu={menu}
          onClose={() => setOpenForm(false)}
          onAdd={handleAddFood}
        />
      )}
    </>
  );
};

export default Food;

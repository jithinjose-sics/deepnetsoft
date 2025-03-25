const express = require('express')
const router = express.Router();
const { addMenuItems, getAllMenuItems, getMenuByType } = require('./Menu/MenuController.js')

// Route to add a new menu item
router.post("/addMenuItem", addMenuItems);

// Route to get all menu items
router.get("/getAllItem", getAllMenuItems);

// Route to get menu items by type (Food or Drinks)
router.get("/menu/:type", getMenuByType);

module.exports = router;

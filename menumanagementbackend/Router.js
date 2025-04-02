const express = require('express');
const router = express.Router();
const { addMenuItems, getAllMenuItems, getMenuByType } = require('./Menu/MenuController.js');

// Route to add a new menu item
router.post("/addMenuItem", async (req, res, next) => {
  try {
    await addMenuItems(req, res);
  } catch (error) {
    next(error);
  }
});

// Route to get all menu items
router.get("/getAllItem", async (req, res, next) => {
  try {
    await getAllMenuItems(req, res);
  } catch (error) {
    next(error);
  }
});

// Route to get menu items by type (Food or Drinks)
router.get("/menu/:type", async (req, res, next) => {
  try {
    await getMenuByType(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
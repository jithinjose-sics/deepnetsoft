const MenuSchema=require('./MenuSchema')

// Create a new menu item
const addMenuItems = async (req, res) => {  
    try {
      const { menu:menuType, menuItem, description, price } = req.body;
  
      if (!["Foods", "Drinks"].includes(menuType)) {
        return res.status(400).json({ error: "Invalid menu type. Must be 'Food' or 'Drinks'." });
      }
  
      const newItem = new MenuSchema({ menuType, menuItem, description, price });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Get all menu items
  const getAllMenuItems= async (req, res) => {
    try {
      const items = await MenuSchema.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
//   app.get("/menu/:type",
    const getMenuByType= async (req, res) => {
      console.log(req.params.type);
    try {
      const menuType = req.params.type;
      if (!["Foods", "Drinks"].includes(menuType)) {
        return res.status(400).json({ error: "Invalid menu type." });
      }
  
      const items = await MenuSchema.find({ menuType });
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
module.exports={
    addMenuItems,
    getAllMenuItems,
    getMenuByType
}
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  menuType: {
    type: String,
    enum: ["Foods", "Drinks"],
    required: true,
  },
  menuItem: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;

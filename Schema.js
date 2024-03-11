const mongoose = require('mongoose');

// Schema for Product
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  SKU: String,
  category_id: { type: Number, ref: 'ProductCategory' },
  inventory_id: { type: Number, ref: 'ProductInventory' },
  price: Number,
  discount_id: { type: Number, ref: 'Discount' },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

// Schema for Product Category
const productCategorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

// Schema for Product Inventory
const productInventorySchema = new mongoose.Schema({
  id: Number,
  quantity: Number,
  created_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

// Schema for Discount
const discountSchema = new mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  discountPercent: Number,
  active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

const Product = mongoose.model('Product', productSchema);
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);

module.exports = { Product, ProductCategory, ProductInventory, Discount };

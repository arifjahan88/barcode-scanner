const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    material: {
      type: String,
      required: true,
      trim: true,
    },
    barcode: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;

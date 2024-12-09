const axios = require("axios");
const Products = require("../models/products.model");
const asyncHandler = require("../utils/asyncHandler");
const { createError } = require("../utils/errorHandler");

//Add Products Controller
exports.addProducts = asyncHandler(async (req, res, next) => {
  const createProducts = await Products.create(req.body);

  if (!createProducts) {
    throw createError(400, "Add Products Failed");
  }

  res.status(200).json({
    success: true,
    message: "Add Products Successfully",
    data: createProducts,
  });
});

//Get All Products Controller
exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Products.find();

  if (!products) {
    throw createError(400, "Get Products Failed");
  }

  res.status(200).json({
    success: true,
    message: "Get Products Successfully",
    data: products,
  });
});

//Get Single Products Controller
exports.getSingleProducts = asyncHandler(async (req, res, next) => {
  const products = await Products.findById(req.params.id);

  if (!products) {
    throw createError(400, "Get Products Failed");
  }

  res.status(200).json({
    success: true,
    message: "Get Products Successfully",
    data: products,
  });
});

//get barcode Single Products Controller
exports.getBarCodeSingleProducts = asyncHandler(async (req, res, next) => {
  const barcode = req.params.id;

  if (!barcode) {
    throw createError(400, "Barcode is required");
  }

  console.log(barcode);

  // Fetch product from external API
  const response = await axios.get(`https://products-test-aci.onrender.com/product/${barcode}`);
  console.log(response);

  // Check if product data exists
  if (!response.data) {
    throw createError(400, "Product not found");
  }

  // Send product data
  res.status(200).json({
    success: true,
    message: "Get Product Successfully",
    data: response.data,
  });
});

//update Products Controller
exports.updateProducts = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const updateProducts = await Products.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updateProducts) {
    throw createError(400, "Update Products Failed");
  }

  res.status(200).json({
    success: true,
    message: "Update Products Successfully",
    data: updateProducts,
  });
});

//Delete Products Controller
exports.deleteProducts = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deleteProducts = await Products.findByIdAndDelete(id);

  if (!deleteProducts) {
    throw createError(400, "Delete Products Failed");
  }

  res.status(200).json({
    success: true,
    message: "Delete Products Successfully",
    data: deleteProducts,
  });
});

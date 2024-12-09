const express = require("express");
const {
  getAllProducts,
  getSingleProducts,
  addProducts,
  updateProducts,
  deleteProducts,
  getBarCodeSingleProducts,
} = require("../controllers/products.controllers");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProducts);
router.get("/barcode/:id", getBarCodeSingleProducts);
router.post("/", addProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

module.exports = router;

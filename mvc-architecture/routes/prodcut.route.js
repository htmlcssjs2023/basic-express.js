const express = require("express");
const { getProduct, saveProduct } = require("../controllers/product.controller");
const router = express.Router();

router.get("/product", getProduct);
router.post("/product", saveProduct);


module.exports = router;
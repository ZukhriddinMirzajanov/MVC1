const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Getting all products
router.get("/", async(req, res) => {

});

router.get("/about", (req, res) => {
    let searchOptions = {};
    if (req.query.name != null && req.query.name !== "") {
        searchOptions.name = new RegExp(req.query.name, "i");
    }
    try {
        const products = await Product.find(searchOptions);
        res.render("about", {
            products: products,
            searchOptions: req.query,
        });
    } catch {
        res.redirect("/");
    }
});

// Getting new product
router.get("/product", (req, res) => {
    res.render("products/product", { product: new Product() });
});

// Creating new product
router.post("/", async(req, res) => {
    const product = new Product({
        name: req.body.name,
        cost: req.body.cost,
        // imgage: req.body.imgage,
    });

    try {
        const newProduct = await product.save();
        // res.redirect(`/${newProduct.id}`);
        res.redirect("/");
    } catch {
        res.render("products/product", {
            product: product,
            errorMessage: "Error during the creating new Product",
        });
    }
});

module.exports = router;
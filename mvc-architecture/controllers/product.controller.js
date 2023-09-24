const path = require("path");

const getProduct = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/product.html"));
}

const saveProduct = (req, res)=>{
    const productName = req.body.productName;
    const productId = Number(req.body.productId);

    res.status(200).send({
        productName,
        productId
    })
}

module.exports = {
    getProduct,
    saveProduct
}

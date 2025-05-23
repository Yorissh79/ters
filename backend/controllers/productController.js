import productModel from "../models/productModel.js";

const getProduct = async (req, res) => {
    const product = await productModel.find();
    res.json(product);
}

const postProduct = async (req, res) => {
    await productModel.create(req.body);
    res.json("success")
}

const deleteProduct = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id);
    res.json("success")
}

export { getProduct, postProduct, deleteProduct };
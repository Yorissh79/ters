import wishlistModel from "../models/wishlistModel.js";

const getWishlist = async (req, res) => {
    const wish = await wishlistModel.find();
    res.json(wish);
}

const findIt = async (it) => {
    const item = await wishlistModel.findOne({it: it})
    return item;
}

const postWishlist = async (req, res) => {

    const exist = await findIt(req.body.it)

    if (!exist) {
        const data = {
            it: req.body.it,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
            name: req.body.name,
        }
        await wishlistModel.create(data)
        res.json("success")
    }
    else {
        res.json("success")
    }
}

const deleteWishlist = async (req, res) => {
    await wishlistModel.findByIdAndDelete(req.params.id);
    res.json("success")
}

export { getWishlist, postWishlist, deleteWishlist };
import basketModel from "../models/basketModel.js";

const getBasket = async (req, res) => {
    const basket = await basketModel.find();
    res.json(basket);
}

const findIt = async (it) => {
    const item = await basketModel.findOne({it: it})
    return item;
}

const postBasket = async (req, res) => {

    const exist = await findIt(req.body.it)

    if (exist) {
        if (Number(exist.count) >= 1 && Number(req.body.count) === 1) {
            const data = {
                it: req.body.it,
                count: String(Number(exist.count) + Number(req.body.count)),
                image: req.body.image,
                description: req.body.description,
                price: req.body.price,
                name: req.body.name,
            }
            await basketModel.findOneAndUpdate(
                {_id: exist._id},
                data,
                {new: true}
            )
            res.json("success")
        }

        if (Number(exist.count) > 1 && Number(req.body.count) === -1) {
            const data = {
                it: req.body.it,
                count: String(Number(exist.count) + Number(req.body.count)),
                image: req.body.image,
                description: req.body.description,
                price: req.body.price,
                name: req.body.name,
            }
            await basketModel.findOneAndUpdate(
                {_id: exist._id},
                data,
                {new: true}
            )
            res.json("success")
        }
        else {
            res.json("success")
        }
    }

    else {
        const data = {
            it: req.body.it,
            count: "1",
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
            name: req.body.name,
        }
        await basketModel.create(data)
        res.json("success")
    }

}

const deleteBasket = async (req, res) => {
    await basketModel.findByIdAndDelete(req.params.id);
    res.status(200)
}

export { getBasket, postBasket, deleteBasket };
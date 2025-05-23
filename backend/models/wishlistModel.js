import mongoose from 'mongoose';

const wishlistSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    it: {type: String, required: true},
}, {timestamps: true});

const wishlistModel = mongoose.model('wishlist', wishlistSchema);
export default wishlistModel;
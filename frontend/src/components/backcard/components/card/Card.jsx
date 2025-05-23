import React from 'react'
import style from './Card.module.scss'
import {useDispatch} from "react-redux";
import {deleteBasketThunk, postBasketThunk} from "../../../../redux/reducers/basketSlice.js";
import {deleteWishlistThunk} from "../../../../redux/reducers/wishlistSlice.js";
import {deleteProductThunk} from "../../../../redux/reducers/productSlice.js";

const Card = ({item, who}) => {

    const dispatch = useDispatch();

    const deleteBasket = () => {
        dispatch(deleteBasketThunk(item._id));
    }

    const addBasket = (count) => {
        const data = {
            it: item.it,
            description: item.description,
            name: item.name,
            image: item.image,
            count: count,
            price: item.price,
        }
        dispatch(postBasketThunk(data))
    }

    const addWishlist = () => {
        const data = {
            it: item.it,
            description: item.description,
            name: item.name,
            image: item.image,
            price: item.price,
        }
        dispatch(postBasketThunk(data))
    }

    const deleteAdmin = () => {
        dispatch(deleteProductThunk(item._id))
    }

    const deleteWishlist = () => {
        dispatch(deleteWishlistThunk(item._id))
    }

    return (
       <div className={style.main}>
           <img src={item.image}/>
           <p>{item.name}</p>
           <p>{item.description}</p>
           <p>{item.price}</p>
           {who === "basket" ? <p>{item.count}</p> : null}
           {who === "basket" ? <div>
               <button onClick={() => {deleteBasket()}}>Delete</button>
               <button onClick={() => {addBasket(1)}}>Add</button>
               {item.count > 1 ? <button onClick={() => {addBasket(-1)}}>Dec</button> : null}
           </div> : null}

           {who === "home" ? <div>
               <button onClick={() => {addBasket(1)}}>Add to basket</button>
               <button onClick={() => {addWishlist()}}>Add to wishlist</button>
           </div> : null}

           {who === "admin" ? <button onClick={() => {deleteAdmin()}}>Delete</button> : null}
           {who === "wishlist" ? <button onClick={() => {deleteWishlist()}}>Delete</button> : null}

       </div>
    )
}

export default Card
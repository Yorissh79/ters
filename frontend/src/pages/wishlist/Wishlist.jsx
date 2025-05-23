import React, {useEffect} from 'react'
import style from './Wishlist.module.scss'
import {Helmet} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import {getWishlistThunk} from "../../redux/reducers/wishlistSlice.js";
import Backcard from "../../components/backcard/Backcard.jsx";

const Wishlist = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.wishlist.wishlist);

    useEffect(() => {
        dispatch(getWishlistThunk())
    }, [])

    return (
       <div className={style.main}>
            <Helmet title="Wishlist" />
           <Backcard data={data} who={"wishlist"} />
       </div>
    )
}

export default Wishlist
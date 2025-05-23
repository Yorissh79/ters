import React, {useEffect} from 'react'
import style from './Home.module.scss'
import {Helmet} from "react-helmet-async";
import Backcard from "../../components/backcard/Backcard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../redux/reducers/productSlice.js";

const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    return (
       <div className={style.main}>
           <Helmet title="Home" />
           <Backcard data={data} who={"home"}/>
       </div>
    )
}

export default Home
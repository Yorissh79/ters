import React from 'react'
import style from './Otherheader.module.scss'
import {Link} from "react-router";

const OtherHeader = () => {
    return (
       <div className={style.main}>
			<Link to={"/"}>Home</Link>
           <Link to={"/admin"}>Admin</Link>
           <Link to={"/wishlist"}>Wishlist</Link>
           <Link to={"/basket"}>Basket</Link>
       </div>
    )
}

export default OtherHeader

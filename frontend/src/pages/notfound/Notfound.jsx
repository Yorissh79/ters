import React from 'react'
import style from './Notfound.module.scss'
import {Helmet} from "react-helmet-async";

const Notfound = () => {
    return (
       <div className={style.main}>
           <Helmet title="Not Found" />
            <h1>Not found</h1>
       </div>
    )
}

export default Notfound
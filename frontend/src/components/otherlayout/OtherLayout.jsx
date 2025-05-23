import React from 'react'
import OtherHeader from "../otherheader/OtherHeader.jsx";
import {Outlet} from "react-router";

const OtherLayout = () => {
    return (
        <>
            <OtherHeader/>
            <Outlet/>
        </>
    )
}

export default OtherLayout
import React from "react";
import Home from "./Pages/Home/Home";

import './Styles/Styles.scss'
import { ToastContainer } from "react-toastify";
import SpecificDay from "./Components/SpecificDay/SpecificDay";

export default function App() {
    return (
        <>
            <ToastContainer
                autoClose={1500}
            />
            <Home />
            {/* <SpecificDay /> */}
        </>
    )
}
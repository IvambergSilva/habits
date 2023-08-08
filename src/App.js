import React from "react";
import Home from "./Pages/Home/Home";

import './Styles/Styles.scss'
import { ToastContainer } from "react-toastify";

export default function App() {
    return (
        <div className="app-container">
            <ToastContainer
                autoClose={1500}
            />
            <Home />
        </div>
    )
}
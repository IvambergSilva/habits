import React from "react";

import './Home.scss';

import NewHabitForm from "../../Components/NewHabitForm/NewHabitForm";

export default function Home() {
    return (
        <div>
            <div className="newHabitForm">
                <NewHabitForm />
            </div>
        </div>
    )
}
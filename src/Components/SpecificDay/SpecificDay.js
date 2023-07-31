import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import HabitDay from "../HabitDay/HabitDay";

export default function SpecificDay() {
    return (
        <div>
            <div className="newHabit-iconArrowLeft">
                <FontAwesomeIcon icon={faArrowLeft} ></FontAwesomeIcon>
            </div>

            <h2>terça-feira</h2>
            <h1>03/01</h1>

            <div>
                progressbar
            </div>

            <HabitDay
                title="Estudar React"
            />
        </div>
    )
}
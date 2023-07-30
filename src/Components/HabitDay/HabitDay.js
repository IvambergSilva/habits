import React, { useState } from "react";

import * as Checkbox from '@radix-ui/react-checkbox'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import './HabitDay.scss'

export default function HabitDay(props) {

    const [isChecked, setIsChecked] = useState(false)

    function toggleChecked() {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <Checkbox.Root
                className="habitDay-container"
                onClick={() => toggleChecked()}
            >
                <div className={`habitDay-checked ${isChecked ? "checked" : ""}`}>

                    <Checkbox.Indicator>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </Checkbox.Indicator>

                </div>

                <span
                    className={`habitDay-label ${isChecked && props.handleLabel ? "checked" : ""}`}
                >{props.title}</span>

            </Checkbox.Root>
        </div>
    )
}
import React from "react";

import './NewHabitForm.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import HabitDay from "../HabitDay/HabitDay";

export default function NewHabit() {
    const daysOfWeek = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
    ]

    return (
        <div className="newHabit-container">
            <div className="newHabit-iconArrowLeft">
                <FontAwesomeIcon icon={faArrowLeft} ></FontAwesomeIcon>
            </div>

            <h1>Criar hábito</h1>

            <h2>Qual o seu comprometimento?</h2>

            <input
                type="text"
                placeholder="Execícios, estudos, etc..."
                className="newHabit-input"
                autoFocus
            ></input>

            <h2>Qual a recorrência?</h2>

            <div className="newHabit-checkbox">
                {
                    daysOfWeek.map((weekDay) => {
                        return (
                            <div key={weekDay}>
                                <HabitDay
                                    title={weekDay}
                                />
                            </div>
                        )
                    })
                }
            </div>

            <button className="newHabit-confirmBtn">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                <span>Confirmar</span>
            </button>
        </div>
    )
}
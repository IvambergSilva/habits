import React, { useState } from "react";
import './NewHabitForm.scss'

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

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
        'Sábado'
    ]

    const [daysSelected, setDaysSelected] = useState([])

    const [title, setTitle] = useState('')

    function handleCreateNewHabit() {
        if (!title || daysSelected.length === 0) {
            toast.warn('Está faltando algo 👀', { style: { fontSize: '2em'} })
        }

        console.log(daysSelected);
    }

    function handleToggleWeekDays(weekDay) {

        if (daysSelected.includes(weekDay)) {
            const newWeekDays = daysSelected.filter(day => day !== weekDay)
            setDaysSelected(newWeekDays)
        } else {
            const newWeekDays = [...daysSelected, weekDay]
            setDaysSelected(newWeekDays)
        }

    }

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
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            ></input>

            <h2>Qual a recorrência?</h2>

            <div className="newHabit-checkbox">
                {
                    daysOfWeek.map((weekDay, index) => {
                        return (
                            <div
                                key={weekDay}
                                onClick={() => handleToggleWeekDays(index)}
                            >
                                <HabitDay
                                    title={weekDay}
                                />
                            </div>
                        )
                    })
                }
            </div>

            <button
                className="newHabit-confirmBtn"
                onClick={() => handleCreateNewHabit()}
            >
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                <span>Confirmar</span>
            </button>
        </div>
    )
}
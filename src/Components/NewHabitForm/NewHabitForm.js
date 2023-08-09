import React, { useState } from "react";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

import HabitDay from "../HabitDay/HabitDay";

import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

import { db } from '../../Database/firebaseConnection'

import './NewHabitForm.scss'

export default function NewHabitForm(props) {
    const daysOfWeek = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]

    const [title, setTitle] = useState('')

    const [daysSelected, setDaysSelected] = useState([])

    function handleToggleWeekDays(weekDay) {
        if (daysSelected.includes(weekDay)) {
            const newWeekDays = daysSelected.filter(day => day !== weekDay)
            setDaysSelected(newWeekDays)
        } else {
            const newWeekDays = [...daysSelected, weekDay]
            setDaysSelected(newWeekDays)
        }
    }

    async function createNewHabit() {
        if (!title || daysSelected.length === 0) {
            toast.warn('Está faltando algo 👀', { style: { fontSize: '2em' } })

        } else {
            const newHabit = {
                habit: title,
            }
    
            const AugustDays = await getDocs(collection(db, "August"))
    
            await AugustDays.forEach((days) => {
                daysSelected.forEach((daysSelected) => {
                    if (days.data().day === daysSelected) {
                        console.log('days.data().habits: ', days.data().habits);
    
                        let existingHabits = days.data().habits || []
    
                        let updatedHabits;
                        if (Array.isArray(existingHabits)) {
                            updatedHabits = [...existingHabits, newHabit];
                        } else {
                            updatedHabits = [newHabit];
                        }
    
                        updateDoc(doc(db, "August", daysSelected.toString()), {
                            habits: updatedHabits
                        })
                            .then(() => {
                                setTitle('')
                                setDaysSelected([])
                            })
                            .catch(() => {
                                toast.warn('Ocorreu um erro!', { style: { fontSize: '2em' } });
                            })
                        }
                    })
                })
            }
            toast.success('Hábito incluído com sucesso! 🎉', { style: { fontSize: '2em' } })
    }

    return (
        <div className="newHabit-container">
            <div
                className="newHabit-iconArrowLeft"
                onClick={() => props.informationState(false)}
            >
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
                onClick={() => createNewHabit()}
            >
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                <span>Confirmar</span>
            </button>
        </div>
    )
}
import React, { useState } from "react";
import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";

import NewHabitForm from '../../Components/NewHabitForm/NewHabitForm'

import SpecificDay from "../../Components/SpecificDay/SpecificDay";

import './Home.scss';

export default function Home() {
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    const [currentDate, setCurrentDate] = useState(new Date())

    const firstDay = startOfMonth(currentDate)
    const lastDay = endOfMonth(currentDate)
    const startDate = startOfWeek(firstDay)
    const endDate = endOfWeek(lastDay)

    const totalDate = eachDayOfInterval({ start: startDate, end: endDate })

    const formatOfYear = "yyyy"
    const formatOfMonth = "MMM"
    const formatOfDay = "d"

    const locale = ptBR

    const currentMonth = new Date().getMonth()

    const [modalNewHabit, setModalNewHabit] = useState(false)

    const [modalSpecificDay, setModalSpecificDay] = useState(false)

    const [informationSent, setInformationSent] = useState({})

    const closeNewHabitForm = state => {
        setModalNewHabit(state)
    }

    const closeSpecificDay = state => {
        setModalSpecificDay(state)
    }

    function sendInformation(date) {
        console.log(format(date, "dd/MM"));
        const informations = {
            daysOfWeek: daysOfWeek[date.getDay()],
            date: format(date, "dd/MM")
        }
        setInformationSent(informations)
        setModalSpecificDay(true)
    }

    return (
        <div className="home-container">
            {!modalNewHabit && !modalSpecificDay &&
                <div>
                    <header>
                        <div className="logo">
                            <div className="logo-details">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <h1>Hábitos</h1>
                        </div>
                        <button
                            className="newHabit"
                            onClick={() => setModalNewHabit(true)}
                        >
                            <div></div>
                            
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                            <span>Novo</span>
                        </button>
                    </header>

                    <div className="selectMonths">
                        <div className="icon" onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </div>

                        <h2 className="monthName">{format(currentDate, formatOfMonth, { locale })}/{format(currentDate, formatOfYear)}</h2>

                        <div className="icon" onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                {daysOfWeek.map((firstLetterDays, index) =>
                                    <th key={index}>{firstLetterDays[0]}</th>
                                )}
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="daysOfWeek-row">
                                {totalDate.map((date, index) => {
                                    const isCurrentMonth = date.getMonth() === firstDay.getMonth()
                                    const isToday = date.getDate() === new Date().getDate();

                                    let className = ""

                                    if (isToday && date.getMonth() === currentMonth) className = "-isToday";
                                    else if (!isCurrentMonth) className = "-empty";

                                    return (
                                        <td
                                            key={index}
                                            className={`daysOfWeek${className}`}
                                            onClick={() => sendInformation(date)}
                                        >
                                            {format(date, formatOfDay)}
                                        </td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table >
                </div>
            }
            {modalNewHabit && <NewHabitForm
                informationState={closeNewHabitForm}
            />}
            {modalSpecificDay && <SpecificDay
                informationState={closeSpecificDay}
                informationSent={informationSent}
            />}
        </div >
    )
}
import React, { useEffect, useState } from "react";
import { getWeeksInMonth } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import './Home.scss';

export default function Home() {

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const currentYear = new Date().getFullYear()

    const [month, selectMonth] = useState(new Date().getMonth() + 1)

    const weekInMonth = getWeeksInMonth(new Date(currentYear, month, 1))

    const [monthlyMatrix, setMonthlyMatrix] = useState([]);

    function handleCalendar() {
        let matrix = new Array(weekInMonth);

        for (let i = 0; i < weekInMonth; i++) {
            matrix[i] = new Array(7).fill(null)
        }

        const firstDateOfMonth = new Date(currentYear, month, 1)

        const lastDaysOfMonth = new Date(currentYear, month, 0).getDate()

        let count = 1

        for (let i = 0; i < weekInMonth; i++) {
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDateOfMonth.getDay()) {
                    matrix[i][j] = 'X'
                }
                else if (count <= lastDaysOfMonth) {
                    matrix[i][j] = count
                    count++
                } else {
                    matrix[i][j] = 'X'
                }
            }
        }
        setMonthlyMatrix(matrix);
    }

    function handleMonth(action) {
        action === "previousMonth" ? selectMonth(month - 1) : selectMonth(month + 1)
        handleCalendar()
    }


    useEffect(() => {
        handleCalendar()
    }, [month])

    return (
        <div>
            <div className="selectMonths">
                <div className="icon" onClick={() => handleMonth("previousMonth")}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </div>

                <h2 className="monthName">{months[month]}</h2>

                <div className="icon" onClick={() => handleMonth("nextMonth")}>
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
                    {monthlyMatrix.map((week, index) => {
                        return (
                            <tr key={index} className="daysOfWeek-row">
                                {week.map((day, index) => {
                                    if (day !== 'X') {
                                        return (
                                            <td className="daysOfWeek" key={index}>{day}</td>
                                        )
                                    } else {
                                        return (
                                            <td className="daysOfWeek-empty" key={index}></td>
                                        )
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
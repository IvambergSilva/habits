import React, { useEffect, useState } from "react";
import { getWeeksInMonth } from "date-fns";

import './Home.scss';
import NewHabitForm from "../../Components/NewHabitForm/NewHabitForm";
import SpecificDay from "../../Components/SpecificDay/SpecificDay";

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
        <div className="newHabitForm">
            {/* <NewHabitForm /> */}
            <SpecificDay />
        </div>
    )
}
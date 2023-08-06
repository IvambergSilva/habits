import React, { useCallback, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import HabitDay from "../HabitDay/HabitDay";

import './SpecificDay.scss'

export default function SpecificDay() {
    const fontStylesLabel = {
        fontSize: "2",
        fontWeight: "600"
    }

    const [progressBar, setProgressBar] = useState(0)
    const [colorBar, setColorBar] = useState('')

    const [habits, setHabits] = useState([
        { title: "Estudar React" },
        { title: "Estudar Angular" },
        { title: "Estudar Next.js" },
        { title: "Estudar Node" },
        { title: "Estudar SQL" },
    ])

    const [habitsSelected, setHabitsSelected] = useState([])

    function handleToggleWeekDays(weekDay) {
        if (habitsSelected.includes(weekDay)) {
            const newWeekDays = habitsSelected.filter(day => day !== weekDay)
            setHabitsSelected(newWeekDays)
        } else {
            const newWeekDays = [...habitsSelected, weekDay]
            setHabitsSelected(newWeekDays)
        }
        handleProgressBar()
    }

    const getColor = useCallback(() => {
        if (progressBar < 20) return "#9AE6B4"
        if (progressBar < 40) return "#68D391"
        if (progressBar < 60) return "#48BB78"
        if (progressBar < 80) return "#38A169"
        return "#2F855A"
    }, [progressBar])

    const handleProgressBar = useCallback(() => {
        const percentage = (habitsSelected.length * 100) / habits.length
        setProgressBar(percentage > 100 ? 100 : percentage)
        setColorBar(getColor())
    }, [habitsSelected, habits.length, getColor])

    useEffect(() => {
        handleProgressBar();
    }, [handleProgressBar]);

    return (
        <div>
            <div className="iconArrowLeft">
                <FontAwesomeIcon icon={faArrowLeft} ></FontAwesomeIcon>
            </div>

            <h2>terça-feira</h2>
            <h1>03/01</h1>

            <div className="newHabit-progressBar">
                <div
                    className="newHabit-progress"
                    style={{
                        width: `${progressBar}%`,
                        backgroundColor: `${colorBar}`
                    }}
                ></div>
            </div>

            <div className="newHabit-habits">
                {habits.map((habit, index) => {
                    return (
                        <div key={index} onClick={() => handleToggleWeekDays(index)}>
                            <HabitDay
                                title={habit.title}
                                font={fontStylesLabel}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
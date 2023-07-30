import React from "react";
import './Week.scss'

export default function Week() {
    return (
        <>
            <table className="daysOfWeek-table">
                <tbody className="daysOfWeek-tbody">
                    <tr className="daysOfWeek-row">
                        <td class="daysOfWeek"></td>
                        <td class="daysOfWeek"></td>
                        <td class="daysOfWeek"></td>
                        <td class="daysOfWeek"></td>
                        <td class="daysOfWeek"></td>
                        <td class="daysOfWeek"></td>
                        <td class="daysOfWeek"></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
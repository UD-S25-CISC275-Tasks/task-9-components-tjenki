import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "Holiday: 🩷"
        | "Holiday: 👩🏿‍✈️"
        | "Holiday: 🐰"
        | "Holiday: 🎅🏿"
        | "Holiday: 💃🏿";
    let HOLIDAY_TIME_TRANSITIONS: Record<Holiday, Holiday> = {
        "Holiday: 🩷": "Holiday: 🐰",
        "Holiday: 🐰": "Holiday: 👩🏿‍✈️",
        "Holiday: 👩🏿‍✈️": "Holiday: 💃🏿",
        "Holiday: 💃🏿": "Holiday: 🎅🏿",
        "Holiday: 🎅🏿": "Holiday: 🩷"
    };
    let HOLIDAY_ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
        "Holiday: 🎅🏿": "Holiday: 🐰",
        "Holiday: 🐰": "Holiday: 💃🏿",
        "Holiday: 💃🏿": "Holiday: 👩🏿‍✈️",
        "Holiday: 👩🏿‍✈️": "Holiday: 🩷",
        "Holiday: 🩷": "Holiday: 🎅🏿"
    };
    let [holiday, setHoliday] = useState<Holiday>("Holiday: 💃🏿");

    function advanceAlphabetically(): void {
        let nextHoliday = HOLIDAY_ALPHABET_TRANSITIONS[holiday];
        setHoliday(nextHoliday);
    }
    function advanceByYear(): void {
        let nextHoliday = HOLIDAY_TIME_TRANSITIONS[holiday];
        setHoliday(nextHoliday);
    }
    return (
        <div>
            <span>{holiday}</span>
            <Button onClick={advanceAlphabetically}>Advance By Alphabet</Button>
            <Button onClick={advanceByYear}>Advance By Year</Button>
        </div>
    );
}
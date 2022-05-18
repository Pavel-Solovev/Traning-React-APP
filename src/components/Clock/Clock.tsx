import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

export type ClockViewPropsType  = {
    date: Date
}

type PropsType = {
    mode: 'analog' | 'digital'
}

export const Clock: React.FC<PropsType> = ({
    mode
                                           }:PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())

            return () => {
                clearInterval(intervalID)
            }
        }, 1000)
    }, [])

    let view
    switch (mode) {
        case 'analog':
            view = <AnalogClock date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClock date={date}/>
            break;
        }
    return <>
        {view}
    </>
}




import style from "./AnalogClockStyle/Style.module.css";
import React from "react";
import {ClockViewPropsType} from "./Clock";

export const AnalogClock = ({date}: ClockViewPropsType) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return <>
        <div className={style.clock}>
            <div className={style['analogClock']}>
                <div className={style.seconds} style={secondsStyle}/>
                <div className={style.minutes} style={minutesStyle}/>
                <div className={style.hours} style={hoursStyle}/>
            </div>
        </div>
    </>
}
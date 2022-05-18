import React from "react";
import {ClockViewPropsType} from "./Clock";

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClock = ({date}: ClockViewPropsType) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}
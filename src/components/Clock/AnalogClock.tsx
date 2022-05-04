import React, {useEffect, useState} from "react";
import style from './AnalogClockStyle/Style.module.css'

type PropsType = {

}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const AnalogClock: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())

            return () => {
                clearInterval(intervalID)
            }
        }, 1000)
    }, [])

        const secondsStyle = {
            transform: `rotate(${date.getSeconds() * 6}deg)`
        };
        const minutesStyle = {
            transform: `rotate(${date.getMinutes() * 6}deg)`
        };
        const hoursStyle = {
            transform: `rotate(${date.getHours() * 30}deg)`
        };
        return (
            <div className={style.clock}>
                <div className={style.analogClock}>
                    <div className={style.seconds} style={secondsStyle} />
                    <div className={style.minutes} style={minutesStyle} />
                    <div className={style.hours} style={hoursStyle} />
                </div>
                <div className={style.digitalClock}>
                    {get2digitsString(date.getHours())}:{get2digitsString(date.getMinutes())}:{get2digitsString(date.getSeconds())}
                </div>
            </div>
        );


    // const handleDate = () => {
    //     const date = new Date();
    //     date.setHours(date.getHours());
    //     let hours = (date.getHours());
    //     let minutes = (date.getMinutes());
    //     let seconds = (date.getSeconds());
    //     setDate({ hours, minutes, seconds });
    // }
    //
    // formatTime(time) {
    //     return time < 10 ? `0${time}` : time;
    // }
}
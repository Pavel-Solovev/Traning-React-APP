import React, {useEffect, useState} from "react";


type PropsType = {
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())

            return () => {
                clearInterval(intervalID)
            }
        }, 1000)
    }, [])

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>



    </div>
}
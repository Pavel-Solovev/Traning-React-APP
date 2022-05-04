import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const a = new Date()
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)



    const [time, setTime] = useState([a.getHours(), a.getMinutes(), a.getSeconds()])


    console.log('SimpleExample')

    useEffect(() => {
        setInterval(() => {
            setTime(state => [state[0], state[1], state[2] + 1])
            if (time[2] >= 60) {
                setTime(state => [state[0], state[1] + 1, state[2] = 0])
            }
            if (time[1] >= 60) {
                setTime(state => [state[0] + 1, state[1] = 0, state[2] = 0])
            }
            if (time[0] >= 24) {
                setTime(state => [state[0] = 0, state[1] = 0, state[2] = 0])
            }

            // setTime((state) => {
            //     return ([state[2] > 59 ? 0 & state[1] + 1 : state[2] + 1
            //         , state[1] > 59 ? 0 & state[0] + 1 : state[1]
            //         , state[0] > 23 ? 0 : state[0]])
            // })
        }, 1000)
    }, [])

    // useEffect(() => {
    //     console.log('useEffect every render')
    //     document.title = counter.toString()
    // }, )
    //
    // useEffect(() => {
    //     console.log('useEffect only first render (componentDidMount)')
    //     document.title = counter.toString()
    // }, [])
    //
    // useEffect(() => {
    //     console.log('useEffect first render and every counter change')
    //     document.title = counter.toString()
    // }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>

            Time: {time[0]}:{time[1]}:{time[2]}
        </>
    );
};

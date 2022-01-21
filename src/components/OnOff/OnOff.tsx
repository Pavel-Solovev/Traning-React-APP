import React, {useState} from 'react';
type PropsType = {
    // on: boolean

}



export function OnOff(props: PropsType) {

    let [on, setOn] = useState(false);  //hook

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        wight: '100%',
        maxWidth: '10px',
        borderRadius: '100%',
        border: on  ? '7px solid green' : '7px solid red',
        display: 'inline-block',
        marginLeft: '5px',
    }
    return <div>
        <div style={onStyle} onClick={ () => { setOn(true) }}>on</div>
        <div style={offStyle} onClick={ () => { setOn(false) }}>off</div>
        <div style={indicatorStyle}></div>
    </div>

}
import React from 'react';
type PropsType = {
    value: boolean
    onClick: (value: boolean) => void

}



export function OnOff({value, onClick}: PropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        padding: '2px',
        backgroundColor: value ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: value ? 'white' : 'red'
    }
    const indicatorStyle = {
        wight: '100%',
        maxWidth: '10px',
        borderRadius: '100%',
        border: value  ? '7px solid green' : '7px solid red',
        display: 'inline-block',
        marginLeft: '5px',
    }

    
    return <div>
        <div style={onStyle} onClick={ () => onClick(true)}>on</div>
        <div style={offStyle} onClick={ () => onClick(false)}>off</div>
        <div style={indicatorStyle}></div>
    </div>

}
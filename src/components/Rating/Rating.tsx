import React from "react";

export type AppRatingPropsType = 0 | 1 | 2 | 3 | 4 | 5;


type RatingPropsType = {
    value: AppRatingPropsType
    onClick: (value: AppRatingPropsType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    const Plus = () => {
        if (props.value < 5) {
            return (props.value + 1)
        }
    }
    const Minus = () => {
        if (props.value > 0) {
            return (props.value - 1)
        }
    }


    return (<div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
            <button onClick={Plus}>+</button>
            <button onClick={Minus}>-</button>
        </div>

    )
}

type StarPropsType = {
    selected: boolean
    value: AppRatingPropsType
    onClick: (value:AppRatingPropsType) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={ () => { props.onClick(props.value) } }>
        {props.selected ? <b>★</b> : '☆'}
    </span>


}
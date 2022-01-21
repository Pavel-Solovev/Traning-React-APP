import React, {useState} from "react";
type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [rating, setRating] = useState(0);

    const Plus = () =>{
        if (rating < 5) {
            return setRating(rating+1)
        }
    }
    const Minus = () =>{
        if (rating > 0) {
            return setRating(rating-1)
        }
    }


    return (<div>
            <Star selected={rating > 0}/>
            <Star selected={rating > 1}/>
            <Star selected={rating > 2}/>
            <Star selected={rating > 3}/>
            <Star selected={rating > 4}/>
            <button onClick={Plus}>+</button>
            <button onClick={Minus}>-</button>
        </div>

    )
}

type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
    console.log('Star rendering')
    if (props.selected) {
        return <span><b>★</b></span>
    } else {
        return <span>☆</span>
    }

}
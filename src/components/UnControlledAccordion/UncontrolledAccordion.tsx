import React, {useReducer} from "react";
import {Simulate} from "react-dom/test-utils";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    let [accor, dispatch] = useReducer(reducer, {collapsed: false});

        return (<div>
            <AccordionTitle title={props.titleValue} onClick={ () => {dispatch({type: TOGGLE_CONSTANT })} } />
            <button onClick={() => {dispatch({type: TOGGLE_CONSTANT})}}>TOGGLE</button>
            {!accor.collapsed && <AccordionBody/>}
        </div>)

}



type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={ props.onClick }>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

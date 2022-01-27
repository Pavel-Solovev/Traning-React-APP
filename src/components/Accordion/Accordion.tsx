import React from "react";

type AccordionPropsType = {
    value: boolean
    onChange: (value: boolean) => void
    titleValue:string
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>{props.title}</h3>
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



export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return (<div>
            <button onClick={()=>props.onChange(!props.value)}>TOGGLE</button>
            <AccordionTitle title={props.titleValue}/>
            {!props.value && <AccordionBody/>}
        </div>)
    }





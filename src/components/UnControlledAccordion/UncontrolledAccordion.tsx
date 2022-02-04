import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    let [accor, setAcc] = useState(true);

        return (<div>
            <AccordionTitle title={props.titleValue} onClick={ () => {setAcc(!accor)} } />
            <button onClick={() => {setAcc(!accor)}}>TOGGLE</button>
            {!accor && <AccordionBody/>}
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

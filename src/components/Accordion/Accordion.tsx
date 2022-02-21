import React from "react";

type ItemType = {
    title:string
    value:any
}

type AccordionPropsType = {
    value: boolean
    onChange: () => void
    titleValue:string
    items: ItemType[]
    onClick: (value:boolean)=>void
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

export function Accordion(props:AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}  />
        {!props.value && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:boolean)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((m, index)=> <li onClick={()=> (props.onClick(m.value))} key={index}>{m.title}</li>)}
        </ul>
    )
}








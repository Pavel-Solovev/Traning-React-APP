import React, {useState} from "react";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

export const AccordionOpen = () => <Accordion value={false} onChange={x=>x} titleValue={'AccordionOpen'} />
export const AccordionClosed = () => <Accordion value={true} onChange={x=>x} titleValue={'AccordionClosed'} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion value={value} onChange={setValue} titleValue={'ModeChanging'} />
}
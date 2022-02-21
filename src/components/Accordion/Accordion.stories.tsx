import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('name1')
const onClickCallback = action('name2')

export const AccordionOpen = () => <Accordion
    value={false}
    onChange={callback}
    titleValue={'AccordionOpen'}
    items={[{title: '1', value: 1}, {title: '2', value: 2}, {title: '3', value: 3}, {title: '4', value: 4}]}
    onClick={onClickCallback}
/>
export const AccordionClosed = () => <Accordion value={true} onChange={callback} titleValue={'AccordionClosed'}
                                                items={[]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        value={value}
        onChange={() => setValue(!value)}
        titleValue={'ModeChanging'}
        items={[{title: '1', value: 1}, {title: '2', value: 2}, {title: '3', value: 3}, {title: '4', value: 4}]}
        onClick={onClickCallback}
    />
}
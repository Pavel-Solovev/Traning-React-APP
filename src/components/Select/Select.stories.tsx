import React, {useState} from 'react';
import {ItemType, Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}



const callBack = action('callBack')
const onClickCallBack = action('onClickCallBack')

export const SelectOpen = () => {
    const [titleValue, setTitleValue] = useState<string>('Choose title')
    const [item, setItem] = useState<Array<ItemType>>([
        {title: 'Name 1', value: 1},
        {title: 'Name 2', value: 2},
        {title: 'Name 3', value: 3},
        {title: 'Name 4', value: 4},
    ])
    return < Select
        value={false}
        onChange={callBack}
        titleValue={titleValue}
        item={item}
        onChangeTitle={onClickCallBack}
    />
}

export const SelectClosed = () => {
    const [titleValue, setTitleValue] = useState<string>('Name 1')

    return < Select
        value={false}
        onChange={callBack}
        titleValue={titleValue}
        item={[]}
        onChangeTitle={onClickCallBack}
    />
}
export const SelectChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    const [titleValue, setTitleValue] = useState<string>('Name 1')
    const [item, setItem] = useState<Array<ItemType>>([
        {title: 'Name 1', value: 1},
        {title: 'Name 2', value: 2},
        {title: 'Name 3', value: 3},
        {title: 'Name 4', value: 4},
    ])

    const ChangeTaskTitle = (item:string) => {
        setTitleValue(item)
        setValue(true)
    }
    return < Select
        value={value}
        onChange={()=>setValue(!value)}
        titleValue={titleValue}
        item={item}
        onChangeTitle={ChangeTaskTitle}
    />
}
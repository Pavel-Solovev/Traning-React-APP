import React, {useState} from 'react';
import s from './Select2.module.css'

export type ItemType = {
    title:string
    value:number
}

type SelectTypeProps={
    value:number
    onChange: (value:number) => void
    item:ItemType[]
}



export function Select2(props:SelectTypeProps) {
    const [active, setActive] = useState(false)
    const selectItem = props.item.find(i=>i.value===props.value)
    const toggleItems = () => setActive(!active)
    const itemClicked = (value: any) => setActive(!active)

    return (
        <>
            <select>
                <option value={1}>name 1</option>
                <option value={2}>name 2</option>
                <option value={3}>name 3</option>
                <option value={4}>name 4</option>
            </select>
            <div className={s.select}>
            <span className={s.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>
            {active &&
                <div className={s.item}>
                {props.item.map(i => <div key={i.value}>{i.title}</div>)}
                </div>
            }
            </div>
        </>
    )
}
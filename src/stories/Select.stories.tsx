import React, {useState} from "react";
import styles from "../components/Select/Select2.module.css";

export type ItemType = {
    title:string
    value:any
}

type SelectTypeProps={
    value:boolean
    onChange: () => void
    titleValue: string
    item:ItemType[]
    onChangeTitle: (item:string)=>void
}

type SelectTitlePropsType ={
    titleValue:string
    onChange:()=>void
}

type SelectBodyPropsType = {
    titleValue:string
    item:ItemType[]
    onChangeTitle: (item:string)=>void
}



const SelectTitle = ({
                         titleValue,
                         onChange
                     }: SelectTitlePropsType) => {
    return(<h3 onClick={(e)=>onChange()}>{titleValue}</h3>)

}

const SelectTitleMemo = React.memo(SelectTitle)

const SelectBody = ({
                        item,
                        onChangeTitle,
                        titleValue,
                    }:SelectBodyPropsType) => {

    const [hoveredElement, setHoveredElement] = useState(titleValue)
    const hoveredItem = item.find(i=>i.title===hoveredElement)


    return (
        <ul>
            {item.map((m, index)=>
                <div className={styles.item + ' '+ (m === hoveredItem ? styles.selected : '')}
                     onMouseEnter={()=>(setHoveredElement(m.title))}
                     onClick={(e)=>onChangeTitle(m.title)}
                     key={index}>{m.title}</div>)}
        </ul>
    )

}

const SelectBodyMemo = React.memo(SelectBody)

export const Select = ({
                           titleValue,
                           item,
                           onChangeTitle,
                           onChange,

                           value
                       }:SelectTypeProps) => {
    return (
        <div>
            <SelectTitleMemo titleValue={titleValue} onChange={onChange} />
            {!value && <SelectBodyMemo titleValue={titleValue} item={item} onChangeTitle={onChangeTitle}/>}

        </div>
    );
};

import React, {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}

export const OnMode = () => <OnOff value={true} onClick={x=>x} />
export const OffMode = () => <OnOff value={false} onClick={x=>x} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff value={value} onClick={setValue} />
}
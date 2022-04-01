import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Button } from './Button';

export default {
  title: 'input'
}

export const  UncontrolledInput =  () =>  <input/>

export const TrackValueOfUncontrolledInput  =  ()  => {
  const [value,  setValue] = useState('')

  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }

  return <><input onChange={onChange }/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }

  return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value} </>
}
export const ControlledInput = () => {
  const [value, setValue] = useState('')
  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }
  return <input value={value} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
  const [value, setValue] = useState(true)
  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.checked)
  }
  return <input type={"checkbox"} checked={value} onChange={onChange}/>
}

export const ControlledSelected = () => {
  const [value, setValue] = useState<string | undefined>(undefined)
  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }
  return <select>
    <option>none</option>
    <option value={1}>Minsk</option>
    <option value={2}>Moscow</option>
    <option value={3}>Kiev</option>
  </select>
}
import React from "react"

export interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
  placeholder?:string | undefined
}

const Input:React.FC<InputProps> = (props) => {

  const { 
    onChange,
    placeholder
  } = props;

  const handlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  }

  return (
    <input className="jzy-input" placeholder={placeholder} onChange={handlerChange}></input>
  )
}

export default Input;
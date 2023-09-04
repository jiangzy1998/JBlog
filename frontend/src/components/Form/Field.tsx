import React, { ChangeEvent, useLayoutEffect } from "react"
import { NamePath, Rule } from "./interface"
import FieldContext from "./FieldContext"

type FieldProps = {
  name:NamePath,
  rules: Rule[],
  children:React.ReactNode
}

const Field: React.FC<FieldProps> = (props) => {
  const { children, name } = props
  const { getFieldValue, setFieldsValue, registerFieldEntities } = React.useContext(FieldContext);
  const [ , forceUpdate ] = React.useReducer((x) => x + 1, 0 );

  useLayoutEffect(() => {
    const unregister = 
    registerFieldEntities && 
    registerFieldEntities({
      props,
      onStoreChange: forceUpdate
    })

    return unregister;
  }, [])

  const getControlled = () => {
    return {
      value: (getFieldValue && getFieldValue(name)) || "",
      onChange:(e:ChangeEvent<HTMLInputElement>) => {
        const newValue = e?.target?.value;
        setFieldsValue && setFieldsValue({ [name]: newValue });
      }
    }
  }

  return React.cloneElement(children as React.ReactElement, getControlled());
}

export default Field;
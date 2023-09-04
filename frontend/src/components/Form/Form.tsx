import React from "react";
import FieldContext from "./FieldContext";
import { Callbacks, FormInstance } from "./interface";
import useForm from "./useForm";

export type FormLayout = 'horizontal' | 'inline' | 'vertical';

interface FormProps<Values = any>{
  form?: FormInstance<Values>,
  children?:React.ReactNode,
  layout?: FormLayout;
  style?:React.CSSProperties;
  className?: string | undefined;
  onFinish?:Callbacks<Values>["onFinish"],
  onFinishFailed?:Callbacks<Values>["onFinishFailed"],
}

const Form:React.FC<FormProps> = (props) => {
  const { 
    children, 
    style,
    className,
    onFinish, 
    onFinishFailed,
    form 
  } = props
  const [ formInstance ] = useForm(form);

  const prefixCls = "jzy";

  formInstance.setCallbacks({onFinish, onFinishFailed});


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
      style = { style }
      className={ className }
      >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}

export default Form;


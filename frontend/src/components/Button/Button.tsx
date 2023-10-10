import React from 'react';

export type ButtonType = 'default' | 'primary' | 'dashed' | 'link' | 'text';


type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type'
>;

export interface ButtonProps extends MergedHTMLAttributes{
  type?:ButtonType,
  children?:React.ReactNode,
}


const Button:React.FC<ButtonProps> = ({
  type = 'default',
  children,
  onClick
})=>{

  const prefixCls = "jzy";

  return (
    <button className={`${prefixCls}-btn ${prefixCls}-btn-${type}`} onClick={onClick}>
      <span>
        { children }
      </span>
    </button>
  )
}

export default Button;
import React, { PropsWithChildren } from 'react'

export const InputType = {
  text: { className: 'px-3 py-1 rounded border-2 border-grey-300' },
  password: { className: 'px-3 py-1 rounded border-2 border-grey-300' },
  dropdown: { className: 'rounded border-2 border-grey-500 p-1 mw-10' },
  date: { className: 'px-3 py-1 rounded border-2 border-grey-300' },
}

export type InputStyle = keyof typeof InputType

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    PropsWithChildren {
  type?: InputStyle
  options?: string[]
  label?: string
}

const Input = ({
  type = 'text',
  placeholder,
  options,
  id,
  label,
  required = false,
  minLength,
  onChange: onValueChange,
  value
}: InputProps) => {
  let inputComponent
  if (type === 'dropdown') {
    inputComponent = (
      <select className={InputType[type].className} id={id} required={required}>
        <option value="" className="text-gray-400">
          Select one
        </option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  } else {
    inputComponent = (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={InputType[type].className}
        required={required}
        minLength={minLength}
        onChange={onValueChange}
        value={value}
      ></input>
    )
  }
  return (
    <div>
      <label htmlFor={id} className="w-80 text-violet-900">
        {label}
      </label>
      {inputComponent}
    </div>
  )
}

export default Input

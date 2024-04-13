import React from 'react'

interface LabelProps
  extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const Label = ({ id, htmlFor, children }: LabelProps) => {
  return (
    <label id={id} htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-gray-900">
      {children}
    </label>
  )
}

export default Label

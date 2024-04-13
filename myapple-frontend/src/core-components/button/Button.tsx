import React, { PropsWithChildren } from 'react'

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    PropsWithChildren {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({
  children,
  onClick = () => null,
  id,
  onMouseOver = () => null,
  type,
}: ButtonProps) => {
  return (
    <button
      className="flex w-auto justify-center rounded-md bg-indigo-600 px-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={(e) => onClick(e)}
      id={id}
      onMouseOver={onMouseOver}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button

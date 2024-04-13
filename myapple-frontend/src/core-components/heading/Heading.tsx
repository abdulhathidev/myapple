import React, { PropsWithChildren } from 'react'

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement>, PropsWithChildren {}

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <h1
      className={`${props.className} text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight`}
    >
      {props.children}
    </h1>
  )
}

export default Heading

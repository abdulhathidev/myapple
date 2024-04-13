import React, { PropsWithChildren } from 'react'
import Apple from '../../assets/logo/apple.png'

interface AppLogoProps extends PropsWithChildren {
  size?: number
}

const AppLogo = ({ size = 12 }: AppLogoProps) => {
  const className = `bg-white rounded-full mx-auto h-${size} w-auto`
  return (
    <div>
      <img src={Apple} className="bg-white rounded-full mx-auto h-10 w-auto"></img>
    </div>
  )
}

export default AppLogo

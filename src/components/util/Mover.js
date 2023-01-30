import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useResponsive } from 'utils/common'

export default function Mover({ y=[50, -50] ,children, ...rest }) {
  const isDesktop = useResponsive('up', 'desktop')
  return (
    <Parallax
      translateY={isDesktop ? y : [0,0]}
      style={{ transition: 'transform 600ms cubic-bezier(0.39, 0.575, 0.55, 0.905) 0s' }}
      {...rest}
    >

      {children}
    </Parallax>
  )
}

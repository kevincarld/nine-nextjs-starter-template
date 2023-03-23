import React from 'react'
import { Image } from '@chakra-ui/react'
import { mock as mockFunc } from 'utils/common'

export default function Img({ dimension, alt, mock=false, src, ...rest}) {
  const [width, height] = dimension.split('x')
  const colors = [
    'gray',
    'white',
    'black',
    'red',
    'blue',
    'green',
    'yellow',
    'pink'
  ]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const mockSrc = mockFunc(dimension, mock, randomColor)

  return (
    <Image
      src={ src ? src : mock ? mockSrc : ''}
      htmlWidth={width}
      htmlHeight={height}
      alt={alt || 'image'}
      {...rest}
    />
  )
}

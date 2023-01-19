import React from 'react'
import { Text } from '@chakra-ui/react'

export default function PreLine({children, content, ...rest}) {
  return (
    <>
      <Text
        {...rest}
        sx={{
          whiteSpace: 'pre-line'
        }}>
          {children ? children : `${content}`}
      </Text>
    </>
  )
}
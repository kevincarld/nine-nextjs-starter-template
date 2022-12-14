import React from 'react'
import { Text } from '@chakra-ui/react'

export default function PreLine({content, ...rest}) {
  return (
    <>
      <Text
        {...rest}
        sx={{
          whiteSpace: 'pre-line'
        }}>
        {`${content}`}
      </Text>
    </>
  )
}
import React from 'react'
import { Link } from '@chakra-ui/react'

export default function NineLink({children, ...rest}) {
  return (
    <Link target={'_blank'} rel="sponsored" _hover={{ color: 'orange' }} {...rest}>
      {children}
    </Link>
  )
}

import React from 'react'
// chakra
import { Box, Link, Text } from "@chakra-ui/react"

export default function FeatureFooter({svg, href, ...rest}) {
  return (
    <Box
      display='flex' flexDir='column' alignItems='center' justifyContent="center"
      pos='absolute' bottom='0px' left='0' right='0' zIndex={30}
      {...rest}
    >
      <Text sx={{
        fontSize: {base: '9px', d: '12px'},
        fontFamily: 'Arial',
        mb: '15px',
        color:'#867750',
      }}>
        ADVERTISING FEATURE
      </Text>

      <Link href={href} target={'_blank'} rel="sponsored" aria-label={`link to ${process.env.brand}`} sx={{'svg': {w:'full'}}}>
        {svg}
      </Link>
    </Box>
  )
}
